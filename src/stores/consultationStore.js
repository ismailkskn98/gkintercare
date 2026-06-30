"use client";

import { create } from "zustand";

export const useConsultationStore = create((set) => ({
  defaultDoctor: "",
  defaultTreatment: "",
  isOpen: false,
  source: "",
  clearDefaults: () => set({ defaultDoctor: "", defaultTreatment: "", source: "" }),
  closeConsultation: () => set({ isOpen: false }),
  openConsultation: (payload = {}) =>
    set({
      defaultDoctor: payload.doctor || "",
      defaultTreatment: payload.treatment || "",
      isOpen: true,
      source: payload.source || "General site consultation",
    }),
}));

