"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import CustomCheckbox from "../common/customCheckbox";
import CustomFieldLabel from "../common/customFieldLabel";
import CustomInput from "../common/customInput";
import CustomSubmitButton from "../common/customSubmitButton";
import CustomTextarea from "../common/customTextarea";
import { useFormSubmissionStore } from "@/stores/formSubmissionStore";

export default function ContactForm({ form, contact }) {
  const formId = useId();
  const setStatus = useFormSubmissionStore((state) => state.setStatus);
  const status = useFormSubmissionStore((state) => state.statuses.contact || "idle");
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
      consent: false,
    },
  });

  const formStatus = form.formStatus || {
    sending: "Sending...",
    success: "Thank you. Our team will get back to you shortly.",
    error: "We could not send your message. Please try again.",
    required: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    validationError: "Please check the highlighted fields.",
    consentRequired: "Please accept the privacy policy to continue.",
  };

  async function onSubmit(values) {
    setStatus("contact", "idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      reset();
      setStatus("contact", "success");
    } catch {
      setStatus("contact", "error");
    }
  }

  const requiredRule = { required: formStatus.required };
  const hasValidationErrors = Object.keys(errors).length > 0;
  const feedbackMessage =
    hasValidationErrors ? formStatus.validationError : status === "success" ? formStatus.success : status === "error" ? formStatus.error : "";
  const feedbackClassName = hasValidationErrors || status === "error" ? "text-[#b53a3a]" : "text-primary-soft";
  const validationSummaryId = `${formId}-validation-summary`;

  return (
    <form className="mt-8 grid gap-5" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <CustomFieldLabel error={errors.fullName} htmlFor={`${formId}-full-name`}>
          {form.fields[0].label}
          <CustomInput
            autoComplete="name"
            error={errors.fullName}
            id={`${formId}-full-name`}
            placeholder={form.fields[0].placeholder}
            aria-describedby={errors.fullName ? validationSummaryId : undefined}
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName", requiredRule)}
          />
        </CustomFieldLabel>

        <CustomFieldLabel error={errors.email} htmlFor={`${formId}-email`}>
          {form.fields[1].label}
          <CustomInput
            autoComplete="email"
            error={errors.email}
            id={`${formId}-email`}
            placeholder={form.fields[1].placeholder}
            type="email"
            aria-describedby={errors.email ? validationSummaryId : undefined}
            aria-invalid={Boolean(errors.email)}
            {...register("email", { ...requiredRule, pattern: { value: /^\S+@\S+\.\S+$/, message: formStatus.invalidEmail } })}
          />
        </CustomFieldLabel>

        <CustomFieldLabel error={errors.phone} htmlFor={`${formId}-phone`}>
          {form.fields[2].label}
          <CustomInput
            autoComplete="tel"
            error={errors.phone}
            id={`${formId}-phone`}
            placeholder={form.fields[2].placeholder}
            type="tel"
            aria-describedby={errors.phone ? validationSummaryId : undefined}
            aria-invalid={Boolean(errors.phone)}
            {...register("phone", requiredRule)}
          />
        </CustomFieldLabel>

        <CustomFieldLabel error={errors.country} htmlFor={`${formId}-country`}>
          {form.fields[3].label}
          <CustomInput
            autoComplete="country-name"
            error={errors.country}
            id={`${formId}-country`}
            placeholder={form.fields[3].placeholder}
            aria-describedby={errors.country ? validationSummaryId : undefined}
            aria-invalid={Boolean(errors.country)}
            {...register("country", requiredRule)}
          />
        </CustomFieldLabel>
      </div>

      <CustomFieldLabel error={errors.message} htmlFor={`${formId}-message`}>
        {form.messageLabel}
        <CustomTextarea
          error={errors.message}
          id={`${formId}-message`}
          maxLength={2000}
          placeholder={form.messagePlaceholder}
          aria-describedby={errors.message ? validationSummaryId : undefined}
          aria-invalid={Boolean(errors.message)}
          {...register("message", requiredRule)}
        />
      </CustomFieldLabel>

      <CustomCheckbox
        error={errors.consent}
        id={`${formId}-consent`}
        aria-describedby={errors.consent ? validationSummaryId : undefined}
        aria-invalid={Boolean(errors.consent)}
        {...register("consent", { required: formStatus.consentRequired })}
      >
        {form.consentText}
      </CustomCheckbox>

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex flex-wrap items-center gap-4">
          <CustomSubmitButton isSubmitting={isSubmitting}>
            {isSubmitting ? formStatus.sending : form.button}
          </CustomSubmitButton>
          <p className="text-xs font-700 text-muted">{form.secureNote}</p>
        </div>
        <p className={`min-h-5 text-sm leading-5 ${feedbackClassName}`} id={validationSummaryId} role={hasValidationErrors ? "alert" : undefined} aria-live="polite">
          {feedbackMessage}
        </p>
      </div>
    </form>
  );
}
