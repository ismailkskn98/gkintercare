"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import FormSubmitButton from "../forms/formSubmitButton";
import { useFormSubmissionStore } from "@/stores/formSubmissionStore";

export default function CallbackRequestForm({ content }) {
  const formId = useId();
  const setStatus = useFormSubmissionStore((state) => state.setStatus);
  const status = useFormSubmissionStore((state) => state.statuses.callback || "idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", defaultValues: { email: "" } });

  async function onSubmit(values) {
    setStatus("callback", "idle");

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Callback request failed");
      }

      reset();
      setStatus("callback", "success");
    } catch {
      setStatus("callback", "error");
    }
  }

  return (
    <form className="relative mt-5 pb-9" noValidate onSubmit={handleSubmit(onSubmit)}>
      <label className="sr-only" htmlFor={`${formId}-email`}>
        {content.emailLabel}
      </label>
      <div className="flex max-w-md flex-col gap-1 bg-[#f3f3f3] p-1 min-[420px]:flex-row">
        <input
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs text-[#151515] outline-none placeholder:text-[#9a9a9a]"
          id={`${formId}-email`}
          placeholder={content.placeholder}
          type="email"
          autoComplete="email"
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          aria-invalid={Boolean(errors.email)}
          {...register("email", {
            required: content.requiredError,
            pattern: { value: /^\S+@\S+\.\S+$/, message: content.invalidEmailError },
          })}
        />
        <FormSubmitButton isSubmitting={isSubmitting} variant="dark" className="rounded-md px-4 text-xs min-[420px]:py-0">
          {isSubmitting ? content.sending : content.button}
        </FormSubmitButton>
      </div>
      <p className={errors.email || status === "error" ? "absolute bottom-0 left-0 min-h-8 text-xs font-700 leading-4 text-[#b53a3a]" : "absolute bottom-0 left-0 min-h-8 text-xs font-700 leading-4 text-primary-soft"} id={`${formId}-email-error`} aria-live="polite">
        {errors.email?.message || (status === "success" ? content.success : status === "error" ? content.error : null)}
      </p>
    </form>
  );
}
