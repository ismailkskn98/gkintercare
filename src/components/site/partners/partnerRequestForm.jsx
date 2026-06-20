"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import FormSubmitButton from "../forms/formSubmitButton";
import { useFormSubmissionStore } from "@/stores/formSubmissionStore";

const inputClassName = "focus-ring w-full rounded-md border border-primary/10 bg-[#f3f7f9] px-4 py-3 text-sm font-600 text-primary outline-none transition placeholder:text-muted focus:border-accent focus:bg-white";
const fieldLabelClassName = "grid gap-2 text-[0.68rem] font-800 uppercase tracking-[0.1em] text-primary/64";

function FieldError({ id, error }) {
  return error ? <span className="text-xs font-700 leading-4 normal-case tracking-normal text-[#b53a3a]" id={id}>{error.message}</span> : null;
}

function PartnerProcess({ process }) {
  return (
    <div className="border-b border-primary/10 bg-[#f8fbfc] px-[clamp(1rem,3vw,2rem)] py-5">
      <span className="text-[0.68rem] font-800 uppercase tracking-[0.12em] text-primary/54">{process.label}</span>
      <ol className="mt-4 grid gap-3 sm:grid-cols-3">
        {process.steps.map((step, index) => (
          <li className="flex items-center gap-2.5 text-xs font-700 leading-5 text-primary/76" key={step}>
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-white text-[0.62rem] font-800 text-accent">{String(index + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function PartnerRequestForm({ form }) {
  const formId = useId();
  const setStatus = useFormSubmissionStore((state) => state.setStatus);
  const status = useFormSubmissionStore((state) => state.statuses.partners || "idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      companyName: "",
      businessType: "",
      email: "",
      phone: "",
      country: "",
      monthlyPatients: "",
      message: "",
      consent: false,
    },
  });

  async function onSubmit(values) {
    setStatus("partners", "idle");

    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Partner request failed");
      }

      reset();
      setStatus("partners", "success");
    } catch {
      setStatus("partners", "error");
    }
  }

  const requiredRule = { required: form.validation.required };

  return (
    <form className="overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(3,27,42,0.24)]" noValidate onSubmit={handleSubmit(onSubmit)}>
      <PartnerProcess process={form.process} />

      <fieldset className="grid gap-5 p-[clamp(1rem,4vw,2rem)]" disabled={isSubmitting}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={fieldLabelClassName} htmlFor={`${formId}-full-name`}>
            {form.fields.fullName.label}
            <input autoComplete="name" className={inputClassName} id={`${formId}-full-name`} placeholder={form.fields.fullName.placeholder} aria-describedby={errors.fullName ? `${formId}-full-name-error` : undefined} aria-invalid={Boolean(errors.fullName)} {...register("fullName", requiredRule)} />
            <FieldError id={`${formId}-full-name-error`} error={errors.fullName} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-company-name`}>
            {form.fields.companyName.label}
            <input autoComplete="organization" className={inputClassName} id={`${formId}-company-name`} placeholder={form.fields.companyName.placeholder} aria-describedby={errors.companyName ? `${formId}-company-name-error` : undefined} aria-invalid={Boolean(errors.companyName)} {...register("companyName", requiredRule)} />
            <FieldError id={`${formId}-company-name-error`} error={errors.companyName} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-business-type`}>
            {form.fields.businessType.label}
            <span className="relative">
              <select className={`${inputClassName} appearance-none pr-10`} defaultValue="" id={`${formId}-business-type`} aria-describedby={errors.businessType ? `${formId}-business-type-error` : undefined} aria-invalid={Boolean(errors.businessType)} {...register("businessType", requiredRule)}>
                <option disabled value="">{form.fields.businessType.placeholder}</option>
                {form.fields.businessType.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" aria-hidden="true" />
            </span>
            <FieldError id={`${formId}-business-type-error`} error={errors.businessType} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-email`}>
            {form.fields.email.label}
            <input autoComplete="email" className={inputClassName} id={`${formId}-email`} placeholder={form.fields.email.placeholder} type="email" aria-describedby={errors.email ? `${formId}-email-error` : undefined} aria-invalid={Boolean(errors.email)} {...register("email", { ...requiredRule, pattern: { value: /^\S+@\S+\.\S+$/, message: form.validation.invalidEmail } })} />
            <FieldError id={`${formId}-email-error`} error={errors.email} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-phone`}>
            {form.fields.phone.label}
            <input autoComplete="tel" className={inputClassName} id={`${formId}-phone`} placeholder={form.fields.phone.placeholder} type="tel" aria-describedby={errors.phone ? `${formId}-phone-error` : undefined} aria-invalid={Boolean(errors.phone)} {...register("phone", requiredRule)} />
            <FieldError id={`${formId}-phone-error`} error={errors.phone} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-country`}>
            {form.fields.country.label}
            <input autoComplete="country-name" className={inputClassName} id={`${formId}-country`} placeholder={form.fields.country.placeholder} aria-describedby={errors.country ? `${formId}-country-error` : undefined} aria-invalid={Boolean(errors.country)} {...register("country", requiredRule)} />
            <FieldError id={`${formId}-country-error`} error={errors.country} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-monthly-patients`}>
            {form.fields.monthlyPatients.label}
            <span className="relative">
              <select className={`${inputClassName} appearance-none pr-10`} defaultValue="" id={`${formId}-monthly-patients`} aria-describedby={errors.monthlyPatients ? `${formId}-monthly-patients-error` : undefined} aria-invalid={Boolean(errors.monthlyPatients)} {...register("monthlyPatients", requiredRule)}>
                <option disabled value="">{form.fields.monthlyPatients.placeholder}</option>
                {form.fields.monthlyPatients.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-primary/55" aria-hidden="true" />
            </span>
            <FieldError id={`${formId}-monthly-patients-error`} error={errors.monthlyPatients} />
          </label>
        </div>

        <label className={fieldLabelClassName} htmlFor={`${formId}-message`}>
          {form.message.label}
          <textarea className={`${inputClassName} min-h-28 resize-y`} id={`${formId}-message`} maxLength="2000" placeholder={form.message.placeholder} {...register("message")} />
        </label>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted" htmlFor={`${formId}-consent`}>
          <input className="focus-ring mt-1 size-4 shrink-0 accent-accent" id={`${formId}-consent`} type="checkbox" aria-describedby={errors.consent ? `${formId}-consent-error` : undefined} {...register("consent", { required: form.validation.consent })} />
          <span>{form.consent}</span>
        </label>
        <FieldError id={`${formId}-consent-error`} error={errors.consent} />
      </fieldset>

      <div className="flex flex-col gap-3 border-t border-primary/10 px-[clamp(1rem,4vw,2rem)] py-5 sm:flex-row sm:items-center sm:justify-between">
        <FormSubmitButton isSubmitting={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? form.status.sending : form.button}
        </FormSubmitButton>
        <p className={`text-sm leading-6 ${status === "error" ? "text-[#b53a3a]" : "text-primary-soft"}`} aria-live="polite">
          {status === "success" ? form.status.success : status === "error" ? form.status.error : null}
        </p>
      </div>
    </form>
  );
}
