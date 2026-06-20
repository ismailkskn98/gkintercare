"use client";

import { useId } from "react";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import FormSubmitButton from "../forms/formSubmitButton";
import { useFormSubmissionStore } from "@/stores/formSubmissionStore";

const inputClassName = "w-full bg-transparent text-sm font-600 text-primary outline-none placeholder:text-muted";
const fieldLabelClassName = "grid gap-2 text-xs font-800 uppercase tracking-[0.1em] text-primary/62";

function FieldError({ error, id }) {
  return error ? (
    <span className="text-xs font-700 leading-4 normal-case tracking-normal text-[#b53a3a]" id={id}>
      {error.message}
    </span>
  ) : null;
}

export default function HomeConsultationForm({ hero }) {
  const formId = useId();
  const fields = hero.formFields;
  const setStatus = useFormSubmissionStore((state) => state.setStatus);
  const status = useFormSubmissionStore((state) => state.statuses.homeConsultation || "idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setStatus("homeConsultation", "idle");

    try {
      const response = await fetch("/api/quick-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Quick consultation request failed");
      }

      reset();
      setStatus("homeConsultation", "success");
    } catch {
      setStatus("homeConsultation", "error");
    }
  }

  const requiredRule = { required: hero.formStatus.required };

  return (
    <form className="relative max-w-lg rounded-lg border border-white/60 bg-white p-6 text-primary md:p-7" noValidate onSubmit={handleSubmit(onSubmit)} style={{ clipPath: "url(#form-notch)" }}>
      <div className="relative z-30 mb-5">
        <span className="section-label text-xs text-primary-soft!">{hero.formLabel}</span>
        <h2 className="mt-2 text-xl font-800 sm:text-2xl">{hero.formTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:leading-6">{hero.formText}</p>
      </div>

      <fieldset className="relative z-30 grid gap-3" disabled={isSubmitting}>
        <label className={fieldLabelClassName} htmlFor={`${formId}-full-name`}>
          {fields.fullName.label}
          <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
            <UserRound size={17} className="text-primary-soft" aria-hidden="true" />
            <input
              autoComplete="name"
              className={inputClassName}
              id={`${formId}-full-name`}
              placeholder={fields.fullName.placeholder}
              aria-describedby={errors.fullName ? `${formId}-full-name-error` : undefined}
              aria-invalid={Boolean(errors.fullName)}
              {...register("fullName", requiredRule)}
            />
          </span>
          <FieldError error={errors.fullName} id={`${formId}-full-name-error`} />
        </label>

        <div className="grid gap-3 md:grid-cols-2">
          <label className={fieldLabelClassName} htmlFor={`${formId}-email`}>
            {fields.email.label}
            <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
              <Mail size={17} className="text-primary-soft" aria-hidden="true" />
              <input
                autoComplete="email"
                className={inputClassName}
                id={`${formId}-email`}
                placeholder={fields.email.placeholder}
                type="email"
                aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                aria-invalid={Boolean(errors.email)}
                {...register("email", { ...requiredRule, pattern: { value: /^\S+@\S+\.\S+$/, message: hero.formStatus.invalidEmail } })}
              />
            </span>
            <FieldError error={errors.email} id={`${formId}-email-error`} />
          </label>

          <label className={fieldLabelClassName} htmlFor={`${formId}-phone`}>
            {fields.phone.label}
            <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
              <Phone size={17} className="text-primary-soft" aria-hidden="true" />
              <input
                autoComplete="tel"
                className={inputClassName}
                id={`${formId}-phone`}
                placeholder={fields.phone.placeholder}
                type="tel"
                aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                aria-invalid={Boolean(errors.phone)}
                {...register("phone", requiredRule)}
              />
            </span>
            <FieldError error={errors.phone} id={`${formId}-phone-error`} />
          </label>
        </div>

        <label className={fieldLabelClassName} htmlFor={`${formId}-country`}>
          {fields.country.label}
          <span className="flex items-center gap-3 rounded-lg border border-primary/10 bg-light-bg px-4 py-3">
            <MapPin size={17} className="text-primary-soft" aria-hidden="true" />
            <input
              autoComplete="country-name"
              className={inputClassName}
              id={`${formId}-country`}
              placeholder={fields.country.placeholder}
              aria-describedby={errors.country ? `${formId}-country-error` : undefined}
              aria-invalid={Boolean(errors.country)}
              {...register("country", requiredRule)}
            />
          </span>
          <FieldError error={errors.country} id={`${formId}-country-error`} />
        </label>

        <label className={fieldLabelClassName} htmlFor={`${formId}-message`}>
          {fields.message.label}
          <textarea
            className="min-h-28 rounded-lg border border-primary/10 bg-light-bg px-4 py-3 text-sm font-600 text-primary outline-none placeholder:text-muted"
            id={`${formId}-message`}
            maxLength="2000"
            placeholder={fields.message.placeholder}
            aria-describedby={errors.message ? `${formId}-message-error` : undefined}
            aria-invalid={Boolean(errors.message)}
            {...register("message", requiredRule)}
          />
          <FieldError error={errors.message} id={`${formId}-message-error`} />
        </label>
      </fieldset>

      <div className="relative z-30 mt-5">
        <FormSubmitButton isSubmitting={isSubmitting} variant="primarySoft" className="w-full">
          {isSubmitting ? hero.formStatus.sending : hero.formButton}
        </FormSubmitButton>
        <p className={`mt-3 text-sm leading-6 ${status === "error" ? "text-[#b53a3a]" : "text-green-500"}`} aria-live="polite">
          {status === "success" ? hero.formStatus.success : status === "error" ? hero.formStatus.error : null}
        </p>
      </div>
    </form>
  );
}
