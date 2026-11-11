import React, { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiAlertCircle, FiArrowUpRight, FiArrowUp, FiChevronDown, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LinkedInLogo, WhatsAppLogo } from "../brandIcons/brandIcons";
import "./contactForm.css";
import { basePath } from "../../constant";
import { profile, services } from "../../data/portfolio";
import {
  composeMessage,
  emailServiceReady,
  mailtoUrl,
  openMailApp,
  sendEmail,
  whatsappUrl,
} from "./delivery";
import {
  ContactErrors,
  ContactField,
  ContactValues,
  LIMITS,
  fieldOrder,
  validateAll,
  validateField,
} from "./validation";

type Status = "idle" | "sending" | "success" | "error" | "whatsapp" | "mailto";

const otherOptions = [
  { id: "employment", title: "Employment opportunity" },
  { id: "other", title: "Something else" },
];
const serviceTitle = (id: string) =>
  [...services, ...otherOptions].find((s) => s.id === id)?.title;

// While typing, an empty email isn't an error yet: it's only required when
// sending by email, which the submit check enforces.
const live = { emailRequired: false };

const whatsappGreeting = `Hi ${profile.firstName}, I found your portfolio and would like to talk about a project.`;

const emptyValues: ContactValues = { name: "", email: "", phone: "", message: "" };

interface FieldProps {
  name: ContactField;
  label: string;
  required?: boolean;
  error?: string;
  hint?: React.ReactNode;
  children: React.ReactElement;
}

// Label + control + inline error, wired together for assistive tech.
const Field = ({ name, label, required, error, hint, children }: FieldProps) => {
  const errorId = `contact-${name}-error`;
  const hintId = `contact-${name}-hint`;
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={`contact-${name}`} className="mono">
        {label}
        {required && (
          <span className="field-required" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {React.cloneElement(children, {
        id: `contact-${name}`,
        name,
        required,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })}
      <div className="field-meta">
        {error ? (
          <p id={errorId} className="field-error">
            <FiAlertCircle aria-hidden="true" /> {error}
          </p>
        ) : (
          <span />
        )}
        {hint && (
          <span id={hintId} className="field-hint mono">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [failedValues, setFailedValues] = useState<ContactValues | null>(null);
  // The prepared email/WhatsApp link, kept after the form clears so the
  // "if it didn't open" retry still carries the whole message.
  const [handoffUrl, setHandoffUrl] = useState("");
  const [service, setService] = useState("");
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const { search } = useLocation();

  // "Discuss this service" links arrive with ?service=<id>; preselect it.
  useEffect(() => {
    const id = new URLSearchParams(search).get("service");
    if (id && services.some((s) => s.id === id)) setService(id);
  }, [search]);

  // Validate a field once the visitor has left it, then live as they fix it.
  const onChange = (field: ContactField) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) setErrors((err) => ({ ...err, [field]: validateField(field, value, live) }));
  };

  const onBlur = (field: ContactField) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((err) => ({ ...err, [field]: validateField(field, values[field], live) }));
  };

  // Check every field for the chosen channel; focus the first problem.
  const checkForm = (form: HTMLFormElement, emailRequired: boolean) => {
    const found = validateAll(values, { emailRequired });
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, message: true });
    const firstInvalid = fieldOrder.find((f) => found[f]);
    if (firstInvalid) {
      setStatus("idle");
      form.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setValues(emptyValues);
    setTouched({});
    setErrors({});
    setService("");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!checkForm(form, true)) return;

    // No form key of our own yet: hand the message to the visitor's email app.
    if (!emailServiceReady) {
      const url = mailtoUrl(values, serviceTitle(service));
      openMailApp(url);
      setHandoffUrl(url);
      setStatus("mailto");
      resetForm();
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    setFailedValues(null);
    const botcheck = form.querySelector<HTMLInputElement>('input[name="botcheck"]')?.checked ?? false;
    const result = await sendEmail(values, { serviceTitle: serviceTitle(service), botcheck });

    if (result.ok) {
      setSentTo(values.email.trim());
      setStatus("success");
      resetForm();
    } else {
      // Keep what they wrote so the fallbacks below can carry it over.
      setFailedValues(values);
      setErrorMessage(result.message);
      setStatus("error");
    }
  };

  const onWhatsApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (!form || !checkForm(form, false)) return;
    const url = whatsappUrl(composeMessage(values, serviceTitle(service)));
    window.open(url, "_blank", "noopener");
    setHandoffUrl(url);
    setStatus("whatsapp");
    resetForm();
  };

  const links = [
    { href: profile.linkedin, label: "LinkedIn", external: true, Icon: LinkedInLogo },
    { href: basePath + profile.resume, label: "Resume (PDF)", external: true },
    { href: whatsappUrl(whatsappGreeting), label: "WhatsApp", external: true, Icon: WhatsAppLogo },
    { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: `Call ${profile.phone}` },
    ...(profile.instagram
      ? [
          {
            href: `https://www.instagram.com/${profile.instagram}/`,
            label: "Instagram",
            external: true,
            Icon: FaInstagram,
          },
        ]
      : []),
  ];

  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="section-head-label mono contact-label">
          <span>(06)</span> Contact
        </p>
        <h2 id="contact-title" className="contact-title display" data-reveal>
          Let's build something <em>together.</em>
        </h2>
        <a className="contact-email serif" href={`mailto:${profile.email}`} data-reveal>
          {profile.email}
          <FiArrowUpRight aria-hidden="true" />
        </a>

        <div className="contact-grid">
          <div className="contact-side">
            <ul className="contact-links">
              {links.map(({ href, label, external, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="contact-link"
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="contact-link-label">
                      {Icon && <Icon aria-hidden="true" className="contact-link-icon" />}
                      {label}
                    </span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li className="contact-place mono">
                {profile.location}
              </li>
            </ul>

            <div className="next-steps">
              <h3 className="mono">What happens next</h3>
              <ol>
                <li>
                  <span className="serif">01</span>
                  You send a message — by the form, email or WhatsApp.
                </li>
                <li>
                  <span className="serif">02</span>I reply {profile.replyTime}.
                </li>
                <li>
                  <span className="serif">03</span>
                  We talk through what you need and agree the scope.
                </li>
              </ol>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <input type="hidden" name="subject" value="New message from your portfolio" />
            <input
              type="checkbox"
              name="botcheck"
              className="visually-hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <p className="mono">Or tell me about your project</p>
            <div className="field">
              <label htmlFor="contact-service" className="mono">
                What do you need?
              </label>
              <div className="select-wrap">
                <select
                  id="contact-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Choose a service (optional)</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  {otherOptions.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="select-icon" aria-hidden="true" />
              </div>
            </div>
            <div className="field-row">
              <Field name="name" label="Name" required error={errors.name}>
                <input
                  type="text"
                  autoComplete="name"
                  maxLength={LIMITS.nameMax}
                  value={values.name}
                  onChange={onChange("name")}
                  onBlur={onBlur("name")}
                />
              </Field>
              <Field
                name="email"
                label="Email"
                required
                error={errors.email}
                hint={<>Optional for WhatsApp</>}
              >
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={values.email}
                  onChange={onChange("email")}
                  onBlur={onBlur("email")}
                />
              </Field>
            </div>
            <Field name="phone" label="Phone" required error={errors.phone}>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={values.phone}
                onChange={onChange("phone")}
                onBlur={onBlur("phone")}
              />
            </Field>
            <Field
              name="message"
              label="Message"
              required
              error={errors.message}
              hint={`${values.message.trim().length} / ${LIMITS.messageMax}`}
            >
              <textarea
                rows={4}
                maxLength={LIMITS.messageMax}
                placeholder="A few lines about your idea, timeline and what you need help with."
                value={values.message}
                onChange={onChange("message")}
                onBlur={onBlur("message")}
              />
            </Field>
            <p className="field-legend mono">
              <span aria-hidden="true">*</span> Required
            </p>
            <div className="form-actions">
              <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
                <FiMail aria-hidden="true" />
                {status === "sending" ? "Sending…" : "Send by email"}
              </button>
              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={onWhatsApp}
                disabled={status === "sending"}
              >
                <WhatsAppLogo aria-hidden="true" /> Send on WhatsApp
              </button>
            </div>

            <div
              className={`form-status ${status}${
                Object.values(errors).some(Boolean) ? " invalid" : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {status === "success" && (
                <p>
                  Thank you — your message has been sent. I'll reply to <strong>{sentTo}</strong>.
                </p>
              )}
              {status === "mailto" && (
                <p>
                  Your email app has opened with the message addressed to{" "}
                  <strong>{profile.email}</strong> — press send there to deliver it. If it
                  didn't open, email me directly at{" "}
                  <a href={handoffUrl} className="link">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
              {status === "whatsapp" && (
                <p>
                  WhatsApp has opened with your message ready — press send there to deliver it.
                  If it didn't open,{" "}
                  <a href={handoffUrl} target="_blank" rel="noreferrer" className="link">
                    open WhatsApp here
                  </a>
                  .
                </p>
              )}
              {status === "error" && failedValues && (
                <p>
                  Your message wasn't sent: {errorMessage} Nothing you typed is lost — send it
                  another way:{" "}
                  <a
                    href={whatsappUrl(composeMessage(failedValues, serviceTitle(service)))}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    WhatsApp
                  </a>{" "}
                  or{" "}
                  <a href={mailtoUrl(failedValues, serviceTitle(service))} className="link">
                    your email app
                  </a>
                  .
                </p>
              )}
              {status === "idle" && Object.values(errors).some(Boolean) && (
                <p>Please fix the highlighted fields.</p>
              )}
            </div>
          </form>
        </div>

        <div className="colophon">
          <span className="serif colophon-name">{profile.name}</span>
          <span className="mono">
            © {new Date().getFullYear()} · {profile.title}
          </span>
          <a href="#top" className="mono colophon-top">
            Back to top <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactForm;
