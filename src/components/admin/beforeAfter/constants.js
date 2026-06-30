export const locales = [
  { key: "en", label: "EN" },
  { key: "es", label: "ES" },
  { key: "it", label: "IT" },
];

export const statusLabels = {
  DRAFT: "Taslak",
  PUBLISHED: "Yayında",
  UNPUBLISHED: "Yayından kalktı",
};

export const beforeAfterDetailMaxLength = 200;

export const defaultOptions = {
  countries: [],
  categories: [],
  statuses: ["DRAFT", "PUBLISHED", "UNPUBLISHED"],
};

export function emptyTranslations() {
  return {
    en: { title: "", detail: "", beforeAlt: "", afterAlt: "" },
    es: { title: "", detail: "", beforeAlt: "", afterAlt: "" },
    it: { title: "", detail: "", beforeAlt: "", afterAlt: "" },
  };
}

export function createEmptyForm(options = defaultOptions) {
  return {
    id: null,
    slug: "",
    countryId: options.countries?.[0]?.id ? String(options.countries[0].id) : "",
    categoryKey: options.categories?.[0]?.key || "nose",
    status: "DRAFT",
    sortOrder: 0,
    translations: emptyTranslations(),
    removeAvatar: false,
  };
}

export function buildBeforeAfterFormData(form, files) {
  const formData = new FormData();
  formData.append(
    "payload",
    JSON.stringify({
      slug: form.slug,
      countryId: Number(form.countryId),
      categoryKey: form.categoryKey,
      status: form.status,
      sortOrder: Number(form.sortOrder) || 0,
      translations: form.translations,
      removeAvatar: form.removeAvatar,
    }),
  );

  if (files.beforeImage) formData.append("beforeImage", files.beforeImage);
  if (files.afterImage) formData.append("afterImage", files.afterImage);
  if (files.avatarImage) formData.append("avatarImage", files.avatarImage);

  return formData;
}
