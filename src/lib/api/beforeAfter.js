import { publicApi } from "./http";

export async function getBeforeAfterCases({ locale, country, category } = {}) {
  const response = await publicApi.get("/before-after", {
    params: {
      locale,
      country,
      category,
    },
  });

  return response.data.items || [];
}

export async function getBeforeAfterMap(locale) {
  const response = await publicApi.get("/before-after/map", {
    params: { locale },
  });

  return response.data.countries || [];
}
