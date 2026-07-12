import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, MessageSquare, Send } from "lucide-react";
import { useId, useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message is a little short—tell us a bit more.";
  }

  return errors;
}

function FieldError({ id, message }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-[var(--color-error)]">
      <AlertCircle aria-hidden="true" className="size-3.5" />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const baseId = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const isSubmitting = status === "submitting";

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Prevent duplicate submissions while a request is in flight.
    if (isSubmitting) {
      return;
    }

    // Honeypot — bots fill hidden fields; humans never see them.
    if (event.target.botcheck?.value) {
      setStatus("success");
      setStatusMessage("Thanks! Your message has been sent.");
      setValues(initialValues);
      return;
    }

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstField = Object.keys(validationErrors)[0];
      document.getElementById(`${baseId}-${firstField}`)?.focus();
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setStatusMessage(
        "The contact form isn't configured yet. Please email us directly and we'll respond right away.",
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim() || `New inquiry from ${values.name.trim()}`,
          message: values.message.trim(),
          from_name: "DevHub Labs Website",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage("Thanks for reaching out! We'll get back to you shortly.");
        setValues(initialValues);
        setErrors({});
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong sending your message. Please try again, or email us directly.",
      );
    }
  }

  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const subjectId = `${baseId}-subject`;
  const messageId = `${baseId}-message`;

  return (
    <form
      className="relative z-10 space-y-6"
      onSubmit={handleSubmit}
      aria-label="Contact form"
      noValidate
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--color-icon-surface)] text-[var(--color-primary)]">
          <MessageSquare aria-hidden="true" className="size-5" />
        </span>
        <div>
          <h2 className="text-card-heading">Send a Message</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Honeypot: hidden from users, catches bots. */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        onChange={() => {}}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            className="form-input w-full rounded-lg px-4 py-3 shadow-sm transition-colors"
            placeholder="Your name"
          />
          <FieldError id={`${nameId}-error`} message={errors.name} />
        </div>
        <div>
          <label htmlFor={emailId} className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            className="form-input w-full rounded-lg px-4 py-3 shadow-sm transition-colors"
            placeholder="you@company.com"
          />
          <FieldError id={`${emailId}-error`} message={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor={subjectId} className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
          Subject
        </label>
        <input
          id={subjectId}
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          className="form-input w-full rounded-lg px-4 py-3 shadow-sm transition-colors"
          placeholder="Project inquiry"
        />
      </div>

      <div>
        <label htmlFor={messageId} className="mb-2 block text-sm font-semibold text-[var(--color-text-primary)]">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className="form-input w-full resize-y rounded-lg px-4 py-3 shadow-sm transition-colors"
          placeholder="Tell us about your project or question..."
        />
        <FieldError id={`${messageId}-error`} message={errors.message} />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="btn-cta-primary inline-flex h-14 items-center justify-center gap-3 rounded-lg px-7 text-sm font-bold transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </button>

        <AnimatePresence mode="wait">
          {status === "success" || status === "error" ? (
            <motion.p
              key={status}
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className={
                status === "success"
                  ? "flex items-center gap-2 text-sm font-medium text-[var(--color-success)]"
                  : "flex items-center gap-2 text-sm font-medium text-[var(--color-error)]"
              }
            >
              {status === "success" ? (
                <CheckCircle2 aria-hidden="true" className="size-4 shrink-0" />
              ) : (
                <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
              )}
              {statusMessage}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
