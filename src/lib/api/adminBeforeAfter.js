import { adminApi } from "./http";

export async function getBeforeAfterOptions() {
  const response = await adminApi.get("/before-after/options");
  return response.data;
}

export async function getAdminBeforeAfter(params) {
  const response = await adminApi.get("/before-after", { params });
  return response.data;
}

export async function createAdminBeforeAfter(formData) {
  const response = await adminApi.post("/before-after", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data.item;
}

export async function updateAdminBeforeAfter(id, formData) {
  const response = await adminApi.patch(`/before-after/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data.item;
}

export async function updateAdminBeforeAfterStatus(id, status) {
  const response = await adminApi.patch(`/before-after/${id}/status`, { status });
  return response.data.item;
}

export async function deleteAdminBeforeAfter(id) {
  const response = await adminApi.delete(`/before-after/${id}`);
  return response.data;
}
