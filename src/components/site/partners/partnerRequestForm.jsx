"use client";

import { useId } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ChevronDown, Handshake } from "lucide-react";
import FormSubmitButton from "../forms/formSubmitButton";
import { useFormSubmissionStore } from "@/stores/formSubmissionStore";

const inputClassName = "w-full border bg-transparent px-0 py-3 pl-2 text-sm font-600 text-primary outline-none transition placeholder:text-muted placeholder:opacity-30";
const fieldLabelClassName = "grid gap-1.5 text-[0.68rem] font-800 uppercase tracking-[0.1em]";

function getFieldLabelClass(error) {
  return `${fieldLabelClassName} ${error ? "text-[#b53a3a]" : "text-primary/60"}`;
}

function getInputClass(error) {
  return `${inputClassName} ${error ? "border-[#b53a3a] focus:border-[#b53a3a]" : "border-transparent border-b-primary/24 focus:border-accent"}`;
}

function FormSection({ number, title, children }) {
  return (
    <section className="grid gap-5 border-b border-primary/12 py-[clamp(1.5rem,3vw,2rem)]">
      <div className="flex items-center gap-3">
        <span className="text-[0.68rem] font-800 tracking-[0.12em] text-accent">{number}</span>
        <h3 className="text-sm font-800 text-primary">{title}</h3>
      </div>
      {children}
    </section>
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
    control,
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
  const hasValidationErrors = Object.keys(errors).length > 0;
  const feedbackMessage = hasValidationErrors ? form.validation.summary : status === "success" ? form.status.success : status === "error" ? form.status.error : "";
  const feedbackClassName = hasValidationErrors || status === "error" ? "text-[#b53a3a]" : "text-primary-soft";
  const validationSummaryId = `${formId}-validation-summary`;
  const [businessType, monthlyPatients] = useWatch({ control, name: ["businessType", "monthlyPatients"] });

  return (
    <form aria-labelledby="partner-enquiry-title" className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-[0_18px_46px_rgba(11,60,93,0.06)]" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-3 border-b border-primary/10 bg-white px-[clamp(1rem,3vw,2rem)] py-5">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-light-bg text-primary">
          <Handshake className="size-5" strokeWidth={2} />
        </span>
        <p className="max-w-xl text-sm leading-6 text-muted">{form.panelText}</p>
      </div>

      <fieldset className="px-[clamp(1rem,3vw,2rem)]" disabled={isSubmitting}>
        <FormSection number="01" title={form.sections.organisation}>
          <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
            <label className={getFieldLabelClass(errors.fullName)} htmlFor={`${formId}-full-name`}>
              {form.fields.fullName.label}
              <input
                autoComplete="name"
                className={getInputClass(errors.fullName)}
                id={`${formId}-full-name`}
                placeholder={form.fields.fullName.placeholder}
                aria-describedby={errors.fullName ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.fullName)}
                {...register("fullName", requiredRule)}
              />
            </label>

            <label className={getFieldLabelClass(errors.companyName)} htmlFor={`${formId}-company-name`}>
              {form.fields.companyName.label}
              <input
                autoComplete="organization"
                className={getInputClass(errors.companyName)}
                id={`${formId}-company-name`}
                placeholder={form.fields.companyName.placeholder}
                aria-describedby={errors.companyName ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.companyName)}
                {...register("companyName", requiredRule)}
              />
            </label>

            <label className={`${getFieldLabelClass(errors.businessType)} sm:col-span-2`} htmlFor={`${formId}-business-type`}>
              {form.fields.businessType.label}
              <span className="relative">
                <select
                  className={`${getInputClass(errors.businessType)} appearance-none pr-8 data-[placeholder=true]:text-muted/40`}
                  data-placeholder={!businessType}
                  defaultValue=""
                  id={`${formId}-business-type`}
                  aria-describedby={errors.businessType ? validationSummaryId : undefined}
                  aria-invalid={Boolean(errors.businessType)}
                  {...register("businessType", requiredRule)}
                >
                  <option className="text-muted" disabled value="">
                    {form.fields.businessType.placeholder}
                  </option>
                  {form.fields.businessType.options.map((option) => (
                    <option className="bg-white text-primary" value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-primary/55" aria-hidden="true" />
              </span>
            </label>
          </div>
        </FormSection>

        <FormSection number="02" title={form.sections.contact}>
          <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
            <label className={getFieldLabelClass(errors.email)} htmlFor={`${formId}-email`}>
              {form.fields.email.label}
              <input
                autoComplete="email"
                className={getInputClass(errors.email)}
                id={`${formId}-email`}
                placeholder={form.fields.email.placeholder}
                type="email"
                aria-describedby={errors.email ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.email)}
                {...register("email", { ...requiredRule, pattern: { value: /^\S+@\S+\.\S+$/, message: form.validation.invalidEmail } })}
              />
            </label>

            <label className={getFieldLabelClass(errors.phone)} htmlFor={`${formId}-phone`}>
              {form.fields.phone.label}
              <input
                autoComplete="tel"
                className={getInputClass(errors.phone)}
                id={`${formId}-phone`}
                placeholder={form.fields.phone.placeholder}
                type="tel"
                aria-describedby={errors.phone ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.phone)}
                {...register("phone", requiredRule)}
              />
            </label>

            <label className={getFieldLabelClass(errors.country)} htmlFor={`${formId}-country`}>
              {form.fields.country.label}
              <input
                autoComplete="country-name"
                className={getInputClass(errors.country)}
                id={`${formId}-country`}
                placeholder={form.fields.country.placeholder}
                aria-describedby={errors.country ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.country)}
                {...register("country", requiredRule)}
              />
            </label>

            <label className={getFieldLabelClass(errors.monthlyPatients)} htmlFor={`${formId}-monthly-patients`}>
              {form.fields.monthlyPatients.label}
              <span className="relative">
                <select
                  className={`${getInputClass(errors.monthlyPatients)} appearance-none pr-8 data-[placeholder=true]:text-muted/40`}
                  data-placeholder={!monthlyPatients}
                  defaultValue=""
                  id={`${formId}-monthly-patients`}
                  aria-describedby={errors.monthlyPatients ? validationSummaryId : undefined}
                  aria-invalid={Boolean(errors.monthlyPatients)}
                  {...register("monthlyPatients", requiredRule)}
                >
                  <option className="text-muted" disabled value="">
                    {form.fields.monthlyPatients.placeholder}
                  </option>
                  {form.fields.monthlyPatients.options.map((option) => (
                    <option className="bg-white text-primary" value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-primary/55" aria-hidden="true" />
              </span>
            </label>
          </div>
        </FormSection>

        <FormSection number="03" title={form.sections.context}>
          <label className={fieldLabelClassName} htmlFor={`${formId}-message`}>
            {form.message.label}
            <textarea
              className={`${getInputClass()} min-h-28 resize-y`}
              id={`${formId}-message`}
              maxLength="2000"
              placeholder={form.message.placeholder}
              {...register("message")}
            />
          </label>
        </FormSection>
      </fieldset>

      <div className="flex flex-col gap-5 border-t border-primary/10 px-[clamp(1rem,3vw,2rem)] py-[clamp(1.5rem,3vw,2rem)]">
        <label className={`flex cursor-pointer items-start gap-3 text-sm leading-6 transition ${errors.consent ? "text-[#b53a3a]" : "text-muted"}`} htmlFor={`${formId}-consent`}>
          <input
            className={`focus-ring mt-1 size-4 shrink-0 accent-accent ${errors.consent ? "outline outline-1 outline-offset-1 outline-[#b53a3a]" : ""}`}
            id={`${formId}-consent`}
            type="checkbox"
            aria-describedby={errors.consent ? validationSummaryId : undefined}
            aria-invalid={Boolean(errors.consent)}
            {...register("consent", { required: form.validation.consent })}
          />
          <span>{form.consent}</span>
        </label>

        <div className="flex flex-col gap-2">
          <FormSubmitButton isSubmitting={isSubmitting} className="w-full sm:w-auto cursor-pointer">
            {isSubmitting ? form.status.sending : form.button}
          </FormSubmitButton>
          <p className={`h-5 overflow-hidden text-sm leading-5 ${feedbackClassName}`} id={validationSummaryId} role={hasValidationErrors ? "alert" : undefined} aria-live="polite">
            {feedbackMessage}
          </p>
        </div>
      </div>
    </form>
  );
}
