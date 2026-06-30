"use client";

import Image from "next/image";
import Select, { components as selectComponents } from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomSubmitButton from "../customSubmitButton";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useLenis } from "@/lib/lenis";
import ConsultationImageDropzone from "./consultationImageDropzone";
import { createConsultationSchema } from "./formSchema";

const inputClassName = "w-full bg-transparent py-2 text-[13px] font-600 text-primary outline-none placeholder:text-muted/40";
const labelClassName = "grid gap-1.5 text-[10px] font-800 uppercase tracking-[0.12em] text-primary/55";
const shellClassName = "flex h-9 items-center gap-2 border-b border-primary/14 bg-transparent transition focus-within:border-accent";
const errorShellClassName = "border-[#b53a3a]";

function FieldShell({ children, error, icon: Icon }) {
  return (
    <span className={`${shellClassName} ${error ? errorShellClassName : ""}`}>
      {Icon ? <Icon className={`size-3.5 shrink-0 ${error ? "text-[#b53a3a]" : "text-primary/45"}`} strokeWidth={2.2} /> : null}
      {children}
    </span>
  );
}

function FieldError({ error }) {
  return error ? <span className="text-[11px] font-600 normal-case tracking-normal text-[#b53a3a]">{error.message}</span> : null;
}

function getSelectStyles(hasError) {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: 36,
      backgroundColor: "transparent",
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: hasError ? "#b53a3a" : state.isFocused ? "#c8a969" : "rgba(11, 60, 93, 0.14)",
      borderRadius: 0,
      boxShadow: "none",
      cursor: "pointer",
      ":hover": {
        borderColor: hasError ? "#b53a3a" : "#c8a969",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#1f6f8a",
      padding: 4,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    input: (base) => ({
      ...base,
      color: "#0b3c5d",
      fontSize: 13,
      fontWeight: 600,
      margin: 0,
      padding: 0,
    }),
    menu: (base) => ({
      ...base,
      border: "1px solid rgba(11, 60, 93, 0.12)",
      borderRadius: 10,
      boxShadow: "0 12px 32px rgba(11, 60, 93, 0.12)",
      overflow: "hidden",
      pointerEvents: "auto",
      zIndex: 9999,
    }),
    menuPortal: (base) => ({
      ...base,
      pointerEvents: "auto",
      zIndex: 9999,
    }),
    menuList: (base) => ({
      ...base,
      padding: 4,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#0b3c5d" : state.isFocused ? "#f6fafd" : "#ffffff",
      borderRadius: 6,
      color: state.isSelected ? "#ffffff" : "#0b3c5d",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 700,
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(107, 115, 128, 0.55)",
      fontSize: 13,
      fontWeight: 600,
    }),
    singleValue: (base) => ({
      ...base,
      color: "#0b3c5d",
      fontSize: 13,
      fontWeight: 700,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "2px 0",
    }),
  };
}

function DoctorOption(props) {
  const doctor = props.data.doctor;

  return (
    <selectComponents.Option {...props}>
      <span className="flex items-center gap-2.5">
        {doctor?.image ? <Image alt="" className="size-7 rounded-full object-cover" height={28} src={doctor.image} width={28} /> : <span className="size-7 rounded-full bg-light-bg" />}
        <span className="min-w-0">
          <span className="block truncate text-[13px] font-800">{props.data.label}</span>
          {doctor?.specialty ? <span className="block truncate text-[11px] font-600 opacity-70">{doctor.specialty}</span> : null}
        </span>
      </span>
    </selectComponents.Option>
  );
}

function DoctorSingleValue(props) {
  const doctor = props.data.doctor;

  return (
    <selectComponents.SingleValue {...props}>
      <span className="flex items-center gap-2">
        {doctor?.image ? <Image alt="" className="size-5 rounded-full object-cover" height={20} src={doctor.image} width={20} /> : null}
        <span className="text-[13px]">{props.data.label}</span>
      </span>
    </selectComponents.SingleValue>
  );
}

function isConsultationSelectTarget(target) {
  if (!(target instanceof Element)) return false;

  return Boolean(
    target.closest("[data-consultation-select]") ||
    target.closest("[class*='consultation-select']") ||
    target.closest("[id*='consultation-treatment']") ||
    target.closest("[id*='consultation-doctor']"),
  );
}

function preventSheetDismiss(event, openSelectCount) {
  if (openSelectCount > 0 || isConsultationSelectTarget(event.target)) {
    event.preventDefault();
  }
}

function getVisibleFieldError(name, errors, touchedFields, isSubmitted) {
  const error = errors[name];
  if (!error) return undefined;
  if (isSubmitted || touchedFields[name]) return error;
  return undefined;
}

function hasVisibleFieldErrors(errors, touchedFields, isSubmitted) {
  const fieldNames = ["consent", "country", "doctorPreference", "email", "fullName", "images", "message", "phone", "treatment"];

  return fieldNames.some((name) => Boolean(getVisibleFieldError(name, errors, touchedFields, isSubmitted)));
}

function getDefaultValues(defaults = {}) {
  return {
    consent: false,
    country: "",
    doctorPreference: defaults.doctor || "",
    email: "",
    fullName: "",
    images: [],
    message: "",
    phone: "",
    source: defaults.source || "General site consultation",
    treatment: defaults.treatment || "",
  };
}

export default function ConsultationSheet({ defaults = {}, doctors = [], onOpenChange, open, treatments = [] }) {
  const t = useTranslations("ConsultationForm");
  const lenis = useLenis();
  const openSelectMenusRef = useRef(0);
  const [openSelectMenus, setOpenSelectMenus] = useState(0);
  const schema = createConsultationSchema(t);
  const defaultDoctor = defaults.doctor || "";
  const defaultSource = defaults.source || "General site consultation";
  const defaultTreatment = defaults.treatment || "";
  const treatmentOptions = useMemo(() => treatments.map((treatment) => ({ label: treatment.title, value: treatment.title })), [treatments]);
  const doctorOptions = useMemo(() => doctors.map((doctor) => ({ doctor, label: doctor.name, value: doctor.name })), [doctors]);
  const {
    control,
    formState: { errors, isSubmitted, isSubmitting, touchedFields },
    clearErrors,
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm({
    defaultValues: getDefaultValues({ doctor: defaultDoctor, source: defaultSource, treatment: defaultTreatment }),
    mode: "onTouched",
    reValidateMode: "onBlur",
    resolver: zodResolver(schema),
  });
  const getVisibleError = (name) => getVisibleFieldError(name, errors, touchedFields, isSubmitted);
  const hasErrors = hasVisibleFieldErrors(errors, touchedFields, isSubmitted);
  const imageError = Array.isArray(errors.images) ? errors.images.find(Boolean)?.message : errors.images?.message || errors.images?.root?.message;
  const visibleImageError = isSubmitted || touchedFields.images ? imageError : undefined;
  const isSuccess = errors.root?.type === "success";

  function handleSelectMenuOpen() {
    openSelectMenusRef.current += 1;
    setOpenSelectMenus(openSelectMenusRef.current);
  }

  function handleSelectMenuClose() {
    openSelectMenusRef.current = Math.max(0, openSelectMenusRef.current - 1);
    setOpenSelectMenus(openSelectMenusRef.current);
  }

  function handleSheetOutsideEvent(event) {
    preventSheetDismiss(event, openSelectMenusRef.current);
  }

  const selectPortalProps = {
    classNamePrefix: "consultation-select",
    menuPlacement: "auto",
    menuPortalTarget: typeof document !== "undefined" ? document.body : null,
    menuPosition: "fixed",
    onMenuClose: handleSelectMenuClose,
    onMenuOpen: handleSelectMenuOpen,
  };

  useEffect(() => {
    if (!open) {
      openSelectMenusRef.current = 0;
      setOpenSelectMenus(0);
      return undefined;
    }

    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
    };
  }, [lenis, open]);

  useEffect(() => {
    if (!open) return;
    reset(getDefaultValues({ doctor: defaultDoctor, source: defaultSource, treatment: defaultTreatment }));
  }, [defaultDoctor, defaultSource, defaultTreatment, open, reset]);

  async function onSubmit(values) {
    clearErrors("root");
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("country", values.country);
    formData.append("treatment", values.treatment);
    formData.append("doctorPreference", values.doctorPreference || "");
    formData.append("message", values.message);
    formData.append("source", values.source || defaultSource);
    formData.append("consent", String(values.consent));
    values.images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("/api/free-consultation", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Consultation request failed");
      }

      reset(getDefaultValues({ source: defaultSource }));
      setError("root", { type: "success", message: t("status.success") });
    } catch {
      setError("root", { type: "server", message: t("status.error") });
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="flex h-full max-h-dvh flex-col overflow-hidden p-0 sm:max-w-[42rem]"
        data-lenis-prevent
        onFocusOutside={handleSheetOutsideEvent}
        onInteractOutside={handleSheetOutsideEvent}
        onPointerDownOutside={handleSheetOutsideEvent}
      >
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="shrink-0 border-b border-primary/8 px-5 pt-5 pb-4 sm:pt-8 sm:px-8">
          <SheetHeader className="max-w-xl pr-8 text-left">
            <span className="text-[10px] font-800 uppercase tracking-[0.14em] text-accent">{t("eyebrow")}</span>
            <SheetTitle className="text-xl font-800 leading-tight md:text-2xl">{t("title")}</SheetTitle>
            <SheetDescription className="text-xs leading-relaxed sm:leading-5 text-muted md:text-sm">{t("description")}</SheetDescription>
          </SheetHeader>
          </div>

          <form className="flex min-h-0 flex-1 flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-5 py-4 sm:px-8" data-lenis-prevent>
            <input type="hidden" {...register("source")} />

            <div className="grid gap-3.5 sm:grid-cols-2">
              <label className={labelClassName}>
                {t("fields.fullName.label")}
                <FieldShell error={getVisibleError("fullName")} icon={UserRound}>
                  <input autoComplete="name" className={inputClassName} placeholder={t("fields.fullName.placeholder")} {...register("fullName")} />
                </FieldShell>
                <FieldError error={getVisibleError("fullName")} />
              </label>

              <label className={labelClassName}>
                {t("fields.email.label")}
                <FieldShell error={getVisibleError("email")} icon={Mail}>
                  <input autoComplete="email" className={inputClassName} placeholder={t("fields.email.placeholder")} type="email" {...register("email")} />
                </FieldShell>
                <FieldError error={getVisibleError("email")} />
              </label>

              <label className={labelClassName}>
                {t("fields.phone.label")}
                <FieldShell error={getVisibleError("phone")} icon={Phone}>
                  <input autoComplete="tel" className={inputClassName} placeholder={t("fields.phone.placeholder")} type="tel" {...register("phone")} />
                </FieldShell>
                <FieldError error={getVisibleError("phone")} />
              </label>

              <label className={labelClassName}>
                {t("fields.country.label")}
                <FieldShell error={getVisibleError("country")} icon={MapPin}>
                  <input autoComplete="country-name" className={inputClassName} placeholder={t("fields.country.placeholder")} {...register("country")} />
                </FieldShell>
                <FieldError error={getVisibleError("country")} />
              </label>

              <div className={labelClassName} data-consultation-select>
                <span>{t("fields.treatment.label")}</span>
                <Controller
                  control={control}
                  name="treatment"
                  render={({ field }) => (
                    <Select
                      {...selectPortalProps}
                      instanceId="consultation-treatment"
                      isSearchable
                      noOptionsMessage={() => t("select.noOptions")}
                      onBlur={field.onBlur}
                      onChange={(option) => field.onChange(option?.value || "")}
                      options={treatmentOptions}
                      placeholder={t("fields.treatment.placeholder")}
                      styles={getSelectStyles(Boolean(getVisibleError("treatment")))}
                      value={treatmentOptions.find((option) => option.value === field.value) || null}
                    />
                  )}
                />
                <FieldError error={getVisibleError("treatment")} />
              </div>

              <div className={labelClassName} data-consultation-select>
                <span>{t("fields.doctorPreference.label")}</span>
                <Controller
                  control={control}
                  name="doctorPreference"
                  render={({ field }) => (
                    <Select
                      {...selectPortalProps}
                      components={{ Option: DoctorOption, SingleValue: DoctorSingleValue }}
                      instanceId="consultation-doctor"
                      isClearable
                      isSearchable
                      noOptionsMessage={() => t("select.noOptions")}
                      onBlur={field.onBlur}
                      onChange={(option) => field.onChange(option?.value || "")}
                      options={doctorOptions}
                      placeholder={t("fields.doctorPreference.placeholder")}
                      styles={getSelectStyles(Boolean(getVisibleError("doctorPreference")))}
                      value={doctorOptions.find((option) => option.value === field.value) || null}
                    />
                  )}
                />
                <FieldError error={getVisibleError("doctorPreference")} />
              </div>
            </div>

            <label className={`${labelClassName} mt-3.5`}>
              {t("fields.message.label")}
              <textarea
                className={`min-h-24 w-full resize-y border-b bg-transparent py-2 text-[13px] font-600 normal-case tracking-normal text-primary outline-none transition placeholder:text-muted/40 focus:border-accent ${getVisibleError("message") ? `${errorShellClassName} bg-[#fff7f7]/40` : "border-primary/14"}`}
                maxLength={2000}
                placeholder={t("fields.message.placeholder")}
                {...register("message")}
              />
              <FieldError error={getVisibleError("message")} />
            </label>

            <div className={`mt-3.5 ${openSelectMenus > 0 ? "pointer-events-none" : ""}`}>
              <Controller
                control={control}
                name="images"
                render={({ field }) => (
                  <ConsultationImageDropzone
                    error={visibleImageError}
                    files={field.value}
                    labels={{
                      dropActive: t("images.dropActive"),
                      helper: t("images.helper"),
                      rejected: t("validation.fileRejected"),
                      remove: t("images.remove"),
                      title: t("images.title"),
                    }}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            <label className={`mt-3.5 flex cursor-pointer items-start gap-2.5 text-xs leading-5 ${getVisibleError("consent") ? "text-[#b53a3a]" : "text-muted"}`}>
              <input className="focus-ring mt-0.5 size-3.5 shrink-0 accent-accent" type="checkbox" {...register("consent")} />
              <span>{t("consent")}</span>
            </label>
          </div>

          <div className="shrink-0 border-t border-primary/8 bg-white/95 px-5 py-3.5 backdrop-blur-sm sm:px-6">
            {isSuccess ? (
              <div className="mb-3 flex items-center gap-2 rounded-lg bg-[#eef8f2] px-3 py-2 text-xs font-700 text-primary-soft">
                <CheckCircle2 className="size-3.5" />
                {t("status.success")}
              </div>
            ) : null}

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <p
                className={`min-h-4 text-[11px] leading-4 ${isSuccess ? "text-primary-soft" : hasErrors || errors.root ? "text-[#b53a3a]" : "text-muted"}`}
                role={hasErrors || errors.root ? "alert" : undefined}
              >
                {errors.root?.message || (hasErrors ? t("validation.summary") : t("secureNote"))}
              </p>
              <CustomSubmitButton className="w-full min-h-9 px-4 py-2 text-sm! sm:w-auto" isSubmitting={isSubmitting} variant="primarySoft">
                {isSubmitting ? t("status.sending") : t("button")}
              </CustomSubmitButton>
            </div>
          </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
