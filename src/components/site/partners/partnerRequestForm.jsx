"use client";

import { useId } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Handshake } from "lucide-react";
import CustomCheckbox from "../common/customCheckbox";
import CustomFieldLabel from "../common/customFieldLabel";
import CustomInput from "../common/customInput";
import CustomSelect from "../common/customSelect";
import CustomSubmitButton from "../common/customSubmitButton";
import CustomTextarea from "../common/customTextarea";
import { useFormSubmissionStore } from "@/stores/formSubmissionStore";

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
            <CustomFieldLabel error={errors.fullName} htmlFor={`${formId}-full-name`}>
              {form.fields.fullName.label}
              <CustomInput
                autoComplete="name"
                error={errors.fullName}
                id={`${formId}-full-name`}
                placeholder={form.fields.fullName.placeholder}
                aria-describedby={errors.fullName ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.fullName)}
                {...register("fullName", requiredRule)}
              />
            </CustomFieldLabel>

            <CustomFieldLabel error={errors.companyName} htmlFor={`${formId}-company-name`}>
              {form.fields.companyName.label}
              <CustomInput
                autoComplete="organization"
                error={errors.companyName}
                id={`${formId}-company-name`}
                placeholder={form.fields.companyName.placeholder}
                aria-describedby={errors.companyName ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.companyName)}
                {...register("companyName", requiredRule)}
              />
            </CustomFieldLabel>

            <CustomFieldLabel className="sm:col-span-2" error={errors.businessType} htmlFor={`${formId}-business-type`}>
              {form.fields.businessType.label}
              <CustomSelect
                defaultValue=""
                error={errors.businessType}
                id={`${formId}-business-type`}
                showPlaceholder={!businessType}
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
              </CustomSelect>
            </CustomFieldLabel>
          </div>
        </FormSection>

        <FormSection number="02" title={form.sections.contact}>
          <div className="grid gap-x-7 gap-y-5 sm:grid-cols-2">
            <CustomFieldLabel error={errors.email} htmlFor={`${formId}-email`}>
              {form.fields.email.label}
              <CustomInput
                autoComplete="email"
                error={errors.email}
                id={`${formId}-email`}
                placeholder={form.fields.email.placeholder}
                type="email"
                aria-describedby={errors.email ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.email)}
                {...register("email", { ...requiredRule, pattern: { value: /^\S+@\S+\.\S+$/, message: form.validation.invalidEmail } })}
              />
            </CustomFieldLabel>

            <CustomFieldLabel error={errors.phone} htmlFor={`${formId}-phone`}>
              {form.fields.phone.label}
              <CustomInput
                autoComplete="tel"
                error={errors.phone}
                id={`${formId}-phone`}
                placeholder={form.fields.phone.placeholder}
                type="tel"
                aria-describedby={errors.phone ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.phone)}
                {...register("phone", requiredRule)}
              />
            </CustomFieldLabel>

            <CustomFieldLabel error={errors.country} htmlFor={`${formId}-country`}>
              {form.fields.country.label}
              <CustomInput
                autoComplete="country-name"
                error={errors.country}
                id={`${formId}-country`}
                placeholder={form.fields.country.placeholder}
                aria-describedby={errors.country ? validationSummaryId : undefined}
                aria-invalid={Boolean(errors.country)}
                {...register("country", requiredRule)}
              />
            </CustomFieldLabel>

            <CustomFieldLabel error={errors.monthlyPatients} htmlFor={`${formId}-monthly-patients`}>
              {form.fields.monthlyPatients.label}
              <CustomSelect
                defaultValue=""
                error={errors.monthlyPatients}
                id={`${formId}-monthly-patients`}
                showPlaceholder={!monthlyPatients}
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
              </CustomSelect>
            </CustomFieldLabel>
          </div>
        </FormSection>

        <FormSection number="03" title={form.sections.context}>
          <CustomFieldLabel htmlFor={`${formId}-message`}>
            {form.message.label}
            <CustomTextarea id={`${formId}-message`} maxLength="2000" placeholder={form.message.placeholder} {...register("message")} />
          </CustomFieldLabel>
        </FormSection>
      </fieldset>

      <div className="flex flex-col gap-5 border-t border-primary/10 px-[clamp(1rem,3vw,2rem)] py-[clamp(1.5rem,3vw,2rem)]">
        <CustomCheckbox
          error={errors.consent}
          id={`${formId}-consent`}
          aria-describedby={errors.consent ? validationSummaryId : undefined}
          aria-invalid={Boolean(errors.consent)}
          {...register("consent", { required: form.validation.consent })}
        >
          {form.consent}
        </CustomCheckbox>

        <div className="flex flex-col gap-2">
          <CustomSubmitButton className="w-full cursor-pointer sm:w-auto" isSubmitting={isSubmitting}>
            {isSubmitting ? form.status.sending : form.button}
          </CustomSubmitButton>
          <p className={`h-5 overflow-hidden text-sm leading-5 ${feedbackClassName}`} id={validationSummaryId} role={hasValidationErrors ? "alert" : undefined} aria-live="polite">
            {feedbackMessage}
          </p>
        </div>
      </div>
    </form>
  );
}
