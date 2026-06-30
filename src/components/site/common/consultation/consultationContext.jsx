"use client";

import { useConsultationStore } from "@/stores/consultationStore";
import ConsultationSheet from "./consultationSheet";

function normalizeDefault(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.name || value.title || "";
}

export function ConsultationProvider({ children, doctors = [], treatments = [] }) {
  const closeConsultation = useConsultationStore((state) => state.closeConsultation);
  const defaultDoctor = useConsultationStore((state) => state.defaultDoctor);
  const defaultTreatment = useConsultationStore((state) => state.defaultTreatment);
  const isOpen = useConsultationStore((state) => state.isOpen);
  const source = useConsultationStore((state) => state.source);

  return (
    <>
      {children}
      <ConsultationSheet
        defaults={{
          doctor: normalizeDefault(defaultDoctor),
          treatment: normalizeDefault(defaultTreatment),
          source,
        }}
        doctors={doctors}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) closeConsultation();
        }}
        open={isOpen}
        treatments={treatments}
      />
    </>
  );
}

export function useConsultation() {
  const clearDefaults = useConsultationStore((state) => state.clearDefaults);
  const closeConsultation = useConsultationStore((state) => state.closeConsultation);
  const openConsultation = useConsultationStore((state) => state.openConsultation);

  return { clearDefaults, closeConsultation, openConsultation };
}
