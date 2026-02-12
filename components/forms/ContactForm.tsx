"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: ""
};

function isEmailValid(value: string) {
  return /^\S+@\S+\.\S+$/.test(value);
}

function isPhoneValid(value: string) {
  return /^[0-9+\-\s]{8,16}$/.test(value);
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [statusMessage, setStatusMessage] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.company.trim()) nextErrors.company = "Company name is required.";
    if (!isEmailValid(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!isPhoneValid(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage("Please fix highlighted fields before submission.");
      return;
    }

    setStatusMessage(
      "Thank you. Your inquiry has been captured successfully. Our team will contact you shortly."
    );
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="metal-panel panel-sheen space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Full Name
          </label>
          <input
            id="contact-name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="form-input"
            placeholder="Enter your full name"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Company
          </label>
          <input
            id="contact-company"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="form-input"
            placeholder="Enter your company name"
          />
          {errors.company ? <p className="mt-1 text-xs text-red-400">{errors.company}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="form-input"
            placeholder="you@company.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Phone
          </label>
          <input
            id="contact-phone"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="form-input"
            placeholder="+91 98765 43210"
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
          Requirement Details
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="form-input"
          placeholder="Describe your products, quantity, and location requirements"
        />
        {errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message}</p> : null}
      </div>

      <button type="submit" className="btn-primary">
        Submit Inquiry
      </button>

      {statusMessage ? <p className="text-sm text-zinc-200">{statusMessage}</p> : null}
    </form>
  );
}
