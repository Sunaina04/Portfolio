import { profile } from "../../data/portfolio";
import { ContactValues } from "./validation";

// Web3Forms emails each submission to the inbox that created this key, so it
// must be a key registered with your own address (free at web3forms.com).
// Set it in .env as REACT_APP_WEB3FORMS_KEY. While it's empty, "Send by email"
// opens the visitor's email app instead, addressed to profile.email.
export const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY?.trim() ?? "";
export const emailServiceReady = WEB3FORMS_KEY !== "";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const TIMEOUT_MS = 15000;

const clean = (values: ContactValues): ContactValues => ({
  name: values.name.trim(),
  email: values.email.trim(),
  phone: values.phone.trim(),
  message: values.message.trim(),
});

// One plain-text message used for WhatsApp and the email fallback.
export const composeMessage = (values: ContactValues, serviceTitle?: string) => {
  const v = clean(values);
  const header = [
    `Hi ${profile.firstName}, I'm ${v.name}.`,
    serviceTitle && `Service: ${serviceTitle}`,
    v.email && `Email: ${v.email}`,
    v.phone && `Phone: ${v.phone}`,
  ].filter(Boolean);
  return `${header.join("\n")}\n\n${v.message}`;
};

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${profile.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Hands a mailto: link to the visitor's default email app.
export const openMailApp = (url: string) => {
  window.location.href = url;
};

export const mailtoUrl = (values: ContactValues, serviceTitle?: string) => {
  const subject = `Portfolio enquiry from ${values.name.trim() || "a visitor"}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    composeMessage(values, serviceTitle)
  )}`;
};

export type SendResult = { ok: true } | { ok: false; message: string };

// Posts to Web3Forms, which emails the submission to the inbox registered
// for WEB3FORMS_KEY. Success means Web3Forms accepted it for delivery.
export const sendEmail = async (
  values: ContactValues,
  { serviceTitle, botcheck }: { serviceTitle?: string; botcheck: boolean }
): Promise<SendResult> => {
  const v = clean(values);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio enquiry from ${v.name}${serviceTitle ? ` — ${serviceTitle}` : ""}`,
        from_name: "Sunaina Ruhaniat — portfolio",
        name: v.name,
        email: v.email,
        phone: v.phone,
        service: serviceTitle || "Not specified",
        message: v.message,
        botcheck,
      }),
      signal: controller.signal,
    });

    let data: { success?: boolean; message?: string } = {};
    try {
      data = await response.json();
    } catch {
      // Non-JSON reply (e.g. a gateway error page); handled below.
    }

    if (response.ok && data.success) return { ok: true };
    return {
      ok: false,
      message: data.message || `The message service returned an error (${response.status}).`,
    };
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "AbortError";
    return {
      ok: false,
      message: timedOut
        ? "The message service took too long to respond."
        : "Couldn't reach the message service — check your connection.",
    };
  } finally {
    clearTimeout(timer);
  }
};
