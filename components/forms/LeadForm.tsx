"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";

type LeadFormProps = {
  title?: string;
  subtitle?: string;
};

type LeadFormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  application: string;
  industry: string;
  monthlyDemand: string;
  location: string;
  message: string;
};

const initialState: LeadFormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  category: "",
  application: "",
  industry: "",
  monthlyDemand: "",
  location: "",
  message: ""
};

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[0-9+\-\s]{8,16}$/.test(phone);
}

export function LeadForm({
  title = "Share Your Requirement",
  subtitle = "Complete this enterprise inquiry form to receive a tailored commercial response."
}: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const progress = useMemo(() => (step / 3) * 100, [step]);

  const validateStep = () => {
    // Validate only the current step so users can progress with focused feedback.
    const nextErrors: Partial<Record<keyof LeadFormState, string>> = {};

    if (step === 1) {
      if (!form.companyName.trim()) nextErrors.companyName = "Company name is required.";
      if (!form.contactName.trim()) nextErrors.contactName = "Contact person is required.";
      if (!validateEmail(form.email)) nextErrors.email = "Enter a valid email.";
      if (!validatePhone(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    }

    if (step === 2) {
      if (!form.category.trim()) nextErrors.category = "Select a category.";
      if (!form.application.trim()) nextErrors.application = "Application is required.";
      if (!form.industry.trim()) nextErrors.industry = "Industry is required.";
      if (!form.monthlyDemand.trim()) nextErrors.monthlyDemand = "Monthly demand is required.";
    }

    if (step === 3) {
      if (!form.location.trim()) nextErrors.location = "Location is required.";
      if (form.message.trim().length < 20) {
        nextErrors.message = "Please provide at least 20 characters of detail.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onNext = () => {
    if (!validateStep()) return;
    setStep((prev) => Math.min(3, prev + 1));
  };

  const onBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep()) return;

    setIsSubmitted(true);
    setForm(initialState);
    setStep(1);
    setErrors({});
  };

  return (
    <form onSubmit={onSubmit} className="metal-panel panel-sheen p-6" noValidate>
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">Enterprise Lead Form</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-zinc-300">{subtitle}</p>
      </header>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.28 }}
          className="h-full rounded-full bg-[linear-gradient(90deg,#f97316,#fb923c)]"
        />
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.1em] text-zinc-500">Step {step} of 3</p>

      {/* Step transitions make the long B2B inquiry flow feel guided, not overwhelming. */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className="mt-5 space-y-4"
        >
          {step === 1 ? (
            <>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Company Name</span>
                <input
                  className="form-input mt-2"
                  value={form.companyName}
                  onChange={(event) => setForm({ ...form, companyName: event.target.value })}
                  placeholder="Your organization"
                />
                {errors.companyName ? <p className="mt-1 text-xs text-red-400">{errors.companyName}</p> : null}
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Contact Person</span>
                <input
                  className="form-input mt-2"
                  value={form.contactName}
                  onChange={(event) => setForm({ ...form, contactName: event.target.value })}
                  placeholder="Full name"
                />
                {errors.contactName ? <p className="mt-1 text-xs text-red-400">{errors.contactName}</p> : null}
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Email</span>
                  <input
                    type="email"
                    className="form-input mt-2"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="buyer@company.com"
                  />
                  {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
                </label>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Phone</span>
                  <input
                    className="form-input mt-2"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
                </label>
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Product Category</span>
                <select
                  className="form-input mt-2"
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                >
                  <option value="">Select category</option>
                  <option>Welding Consumables</option>
                  <option>Welding Machines</option>
                  <option>Tools & Equipment</option>
                  <option>Protective Gear</option>
                </select>
                {errors.category ? <p className="mt-1 text-xs text-red-400">{errors.category}</p> : null}
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Application</span>
                <input
                  className="form-input mt-2"
                  value={form.application}
                  onChange={(event) => setForm({ ...form, application: event.target.value })}
                  placeholder="Shipbuilding / Structural fabrication"
                />
                {errors.application ? <p className="mt-1 text-xs text-red-400">{errors.application}</p> : null}
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Industry</span>
                  <input
                    className="form-input mt-2"
                    value={form.industry}
                    onChange={(event) => setForm({ ...form, industry: event.target.value })}
                    placeholder="Oil & gas / Construction"
                  />
                  {errors.industry ? <p className="mt-1 text-xs text-red-400">{errors.industry}</p> : null}
                </label>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Monthly Demand</span>
                  <input
                    className="form-input mt-2"
                    value={form.monthlyDemand}
                    onChange={(event) => setForm({ ...form, monthlyDemand: event.target.value })}
                    placeholder="Example: 2 ton / month"
                  />
                  {errors.monthlyDemand ? <p className="mt-1 text-xs text-red-400">{errors.monthlyDemand}</p> : null}
                </label>
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Delivery Location</span>
                <input
                  className="form-input mt-2"
                  value={form.location}
                  onChange={(event) => setForm({ ...form, location: event.target.value })}
                  placeholder="City, State"
                />
                {errors.location ? <p className="mt-1 text-xs text-red-400">{errors.location}</p> : null}
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-300">Requirement Notes</span>
                <textarea
                  rows={5}
                  className="form-input mt-2"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  placeholder="Mention specs, standard, project timeline, approval requirements"
                />
                {errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message}</p> : null}
              </label>
            </>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-2">
        {step > 1 ? (
          <button type="button" onClick={onBack} className="btn-outline">
            Back
          </button>
        ) : null}

        {step < 3 ? (
          <button type="button" onClick={onNext} className="btn-primary">
            Continue
          </button>
        ) : (
          <button type="submit" className="btn-primary">
            Submit Inquiry
          </button>
        )}
      </div>

      {isSubmitted ? (
        <p className="mt-4 rounded-md border border-emerald-700/40 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          Inquiry captured successfully. Our enterprise sales team will contact you shortly.
        </p>
      ) : null}
    </form>
  );
}
