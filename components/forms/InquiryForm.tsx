"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { companyInfo } from "@/lib/company";

type InquiryFormState = {
  fullName: string;
  company: string;
  businessType: string;
  email: string;
  phone: string;
  city: string;
  productInterest: string;
  monthlyRequirement: string;
  message: string;
};

type InquiryFormProps = {
  defaultProduct?: string;
};

function isEmailValid(value: string) {
  return /^\S+@\S+\.\S+$/.test(value);
}

function isPhoneValid(value: string) {
  return /^[0-9+\-\s]{8,16}$/.test(value);
}

function decodeProductParam(value: string) {
  try {
    return decodeURIComponent(value).replace(/-/g, " ");
  } catch {
    return value.replace(/-/g, " ");
  }
}

export function InquiryFormWithSearchParams() {
  const searchParams = useSearchParams();

  const defaultProduct = useMemo(() => {
    const productParam = searchParams.get("product");
    return productParam ? decodeProductParam(productParam) : "";
  }, [searchParams]);

  return <InquiryForm key={defaultProduct || "default-inquiry"} defaultProduct={defaultProduct} />;
}

export function InquiryForm({ defaultProduct = "" }: InquiryFormProps) {
  const initialState = useMemo<InquiryFormState>(
    () => ({
      fullName: "",
      company: "",
      businessType: "Dealer",
      email: "",
      phone: "",
      city: "",
      productInterest: defaultProduct,
      monthlyRequirement: "",
      message: ""
    }),
    [defaultProduct]
  );

  const [form, setForm] = useState<InquiryFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormState, string>>>({});
  const [statusMessage, setStatusMessage] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof InquiryFormState, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Contact name is required.";
    if (!form.company.trim()) nextErrors.company = "Company name is required.";
    if (!isEmailValid(form.email)) nextErrors.email = "Enter a valid business email.";
    if (!isPhoneValid(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!form.productInterest.trim()) nextErrors.productInterest = "Product interest is required.";
    if (!form.monthlyRequirement.trim()) {
      nextErrors.monthlyRequirement = "Monthly requirement helps us provide accurate quotes.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage("Please complete all required details.");
      return;
    }

    setStatusMessage(
      "Inquiry submitted successfully. Our sales team will share product and pricing details shortly."
    );
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="metal-panel panel-sheen space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Contact Person
          </label>
          <input
            id="inq-name"
            value={form.fullName}
            onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
            className="form-input"
            placeholder="Full name"
          />
          {errors.fullName ? <p className="mt-1 text-xs text-red-400">{errors.fullName}</p> : null}
        </div>

        <div>
          <label htmlFor="inq-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Company Name
          </label>
          <input
            id="inq-company"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="form-input"
            placeholder="Company / Firm"
          />
          {errors.company ? <p className="mt-1 text-xs text-red-400">{errors.company}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Business Email
          </label>
          <input
            id="inq-email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="form-input"
            placeholder="buyer@company.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="inq-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Phone / WhatsApp
          </label>
          <input
            id="inq-phone"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="form-input"
            placeholder={companyInfo.phone}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-type" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Business Type
          </label>
          <select
            id="inq-type"
            value={form.businessType}
            onChange={(event) => setForm((prev) => ({ ...prev, businessType: event.target.value }))}
            className="form-input"
          >
            <option>Dealer</option>
            <option>Distributor</option>
            <option>Manufacturer</option>
            <option>Fabrication Contractor</option>
            <option>Procurement Team</option>
          </select>
        </div>

        <div>
          <label htmlFor="inq-city" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            City / Region
          </label>
          <input
            id="inq-city"
            value={form.city}
            onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            className="form-input"
            placeholder="Ahmedabad, Gujarat"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-product" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Product Requirement
          </label>
          <input
            id="inq-product"
            value={form.productInterest}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, productInterest: event.target.value }))
            }
            className="form-input"
            placeholder="Example: Arc welding machine 400A"
          />
          {errors.productInterest ? (
            <p className="mt-1 text-xs text-red-400">{errors.productInterest}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="inq-monthly" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
            Monthly Requirement
          </label>
          <input
            id="inq-monthly"
            value={form.monthlyRequirement}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, monthlyRequirement: event.target.value }))
            }
            className="form-input"
            placeholder="Example: 50 units / month"
          />
          {errors.monthlyRequirement ? (
            <p className="mt-1 text-xs text-red-400">{errors.monthlyRequirement}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="inq-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.09em] text-zinc-300">
          Additional Notes
        </label>
        <textarea
          id="inq-message"
          rows={4}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="form-input"
          placeholder="Share preferred brands, delivery schedule, or technical requirements"
        />
      </div>

      <p className="text-xs text-zinc-400">
        Official inquiry mailbox:{" "}
        <a href={`mailto:${companyInfo.email}`} className="text-zinc-200 underline-offset-4 hover:underline">
          {companyInfo.email}
        </a>
      </p>

      <button type="submit" className="btn-primary">
        Submit Dealer Inquiry
      </button>

      {statusMessage ? <p className="text-sm text-zinc-200">{statusMessage}</p> : null}
    </form>
  );
}
