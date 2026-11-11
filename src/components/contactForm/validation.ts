export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const LIMITS = {
  nameMax: 80,
  messageMax: 2000,
  phoneDigitsMin: 7,
  phoneDigitsMax: 15,
};

// Letters from any script, plus spaces, apostrophes, hyphens and dots.
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;
// Pragmatic email check: local@domain.tld, no spaces, a 2+ letter TLD.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/;
// Digits with optional leading +, spaces, dashes, dots and brackets.
const PHONE_PATTERN = /^\+?[\d\s().-]+$/;

export interface ValidateOptions {
  // Email is required to reply to an emailed message, but optional when the
  // visitor sends on WhatsApp instead (their number is visible there).
  emailRequired?: boolean;
}

export const validateField = (
  field: ContactField,
  raw: string,
  { emailRequired = true }: ValidateOptions = {}
): string | undefined => {
  const value = raw.trim();

  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      if (value.length > LIMITS.nameMax) return `Name must be under ${LIMITS.nameMax} characters.`;
      if (!NAME_PATTERN.test(value)) return "Name can only contain letters, spaces, hyphens and apostrophes.";
      return undefined;

    case "email":
      if (!value) return emailRequired ? "Please enter your email address." : undefined;
      if (!EMAIL_PATTERN.test(value)) return "Enter a valid email address, like name@example.com.";
      return undefined;

    case "phone": {
      if (!value) return "Please enter your phone number.";
      if (!PHONE_PATTERN.test(value)) {
        return "Phone can only contain digits, spaces, +, -, ( and ).";
      }
      const digits = value.replace(/\D/g, "").length;
      if (digits < LIMITS.phoneDigitsMin || digits > LIMITS.phoneDigitsMax) {
        return `Enter a phone number with ${LIMITS.phoneDigitsMin}–${LIMITS.phoneDigitsMax} digits, including country code.`;
      }
      return undefined;
    }

    case "message":
      if (!value) return "Please tell me a little about your project.";
      if (value.length > LIMITS.messageMax) {
        return `Please keep your message under ${LIMITS.messageMax} characters.`;
      }
      return undefined;
  }
};

export const fieldOrder: ContactField[] = ["name", "email", "phone", "message"];

export const validateAll = (values: ContactValues, options?: ValidateOptions): ContactErrors =>
  fieldOrder.reduce<ContactErrors>((errors, field) => {
    const error = validateField(field, values[field], options);
    if (error) errors[field] = error;
    return errors;
  }, {});
