"use client";

import { create } from "zustand";

export const useFormSubmissionStore = create((set) => ({
  statuses: {},
  setStatus: (formName, status) => {
    set((state) => ({
      statuses: {
        ...state.statuses,
        [formName]: status,
      },
    }));
  },
}));
