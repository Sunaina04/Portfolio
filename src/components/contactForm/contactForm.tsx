import React, { FormEvent, useState } from "react";
import {
  FaEnvelope,
  FaFileDownload,
  FaLinkedin,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./contactForm.css";
import { basePath } from "../../constant";
import { profile } from "../../data/portfolio";

const WEB3FORMS_KEY = "7338abc0-8ae1-4080-a8b2-96b0e958a8ae";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred while submitting the form.");
      console.error("Error:", error);
    }
  };

  const contactLinks = [
    {
      href: `mailto:${profile.email}`,
      label: profile.email,
      Icon: FaEnvelope,
    },
    {
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      label: profile.phone,
      Icon: FaPhoneAlt,
    },
    {
      href: profile.linkedin,
      label: "LinkedIn",
      Icon: FaLinkedin,
      external: true,
    },
    {
      href: basePath + profile.resume,
      label: "Download Resume",
      Icon: FaFileDownload,
      external: true,
    },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="section contact">
        <div className="contact-intro">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-lead">
            Have a project to deliver or a team to lead? I'd be glad to hear
            from you.
          </p>
          <ul className="contact-links">
            {contactLinks.map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="contact-link"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="card contact-form" onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
          <input
            type="hidden"
            name="subject"
            value="New message from your portfolio"
          />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden-field"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="form-row">
            <label className="form-field">
              <span>Full Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className="form-field">
              <span>Email Address</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>
          <label className="form-field">
            <span>Phone Number</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label className="form-field">
            <span>Message</span>
            <textarea name="message" rows={5} required />
          </label>

          <button
            type="submit"
            className="btn btn-primary send-button"
            disabled={status === "sending"}
          >
            <FaPaperPlane aria-hidden="true" />
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          <p className={`form-result ${status}`} role="status">
            {status === "success" && "Thanks! Your message has been sent."}
            {status === "error" && errorMessage}
          </p>
        </form>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </span>
      </div>
    </footer>
  );
};

export default ContactForm;
