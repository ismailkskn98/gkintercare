"use client";

import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/toast";
import { getAdminMe } from "@/lib/api/adminAuth";
import { createAdminBeforeAfter, deleteAdminBeforeAfter, getAdminBeforeAfter, getBeforeAfterOptions, updateAdminBeforeAfter, updateAdminBeforeAfterStatus } from "@/lib/api/adminBeforeAfter";
import ConfirmDialog from "./common/confirmDialog";
import BeforeAfterFilters from "./beforeAfter/beforeAfterFilters";
import BeforeAfterForm from "./beforeAfter/beforeAfterForm";
import BeforeAfterTable from "./beforeAfter/beforeAfterTable";
import { beforeAfterDetailMaxLength, buildBeforeAfterFormData, createEmptyForm, defaultOptions, emptyTranslations } from "./beforeAfter/constants";

export default function BeforeAfterManager() {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [options, setOptions] = useState(defaultOptions);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 12, total: 0, totalPages: 1 });
  const [filters, setFilters] = useState({ search: "", status: "", country: "", category: "" });
  const [form, setForm] = useState(() => createEmptyForm());
  const [files, setFiles] = useState({ beforeImage: null, afterImage: null, avatarImage: null });
  const [previews, setPreviews] = useState({ beforeImage: "", afterImage: "", avatarImage: "" });
  const [activeLocale, setActiveLocale] = useState("en");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [error, setError] = useState("");

  const loadItems = useCallback(
    async (nextPage = 1) => {
      setIsLoading(true);
      setError("");

      try {
        const data = await getAdminBeforeAfter({ ...filters, page: nextPage, pageSize: pagination.pageSize });
        setItems(data.items || []);
        setPagination(data.pagination || { page: nextPage, pageSize: 12, total: 0, totalPages: 1 });
      } catch (err) {
        const message = err.response?.data?.error || "Kayıtlar yüklenemedi.";
        setError(message);
        toast({ title: "Kayıtlar yüklenemedi", description: message, variant: "destructive" });
      } finally {
        setIsLoading(false);
      }
    },
    [filters, pagination.pageSize, toast],
  );

  useEffect(() => {
    getAdminMe()
      .then(setUser)
      .catch(() => {});
    getBeforeAfterOptions()
      .then((data) => {
        setOptions(data);
        setForm(createEmptyForm(data));
      })
      .catch((err) => {
        const message = err.response?.data?.error || "Seçenekler yüklenemedi.";
        setError(message);
        toast({ title: "Seçenekler yüklenemedi", description: message, variant: "destructive" });
      });
  }, [toast]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      loadItems(1);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [loadItems]);

  function resetForm() {
    setForm(createEmptyForm(options));
    setFiles({ beforeImage: null, afterImage: null, avatarImage: null });
    setPreviews({ beforeImage: "", afterImage: "", avatarImage: "" });
    setActiveLocale("en");
    setError("");
  }

  function startEdit(item) {
    setForm({
      id: item.id,
      slug: item.slug,
      countryId: String(item.country.id),
      categoryKey: item.categoryKey,
      status: item.status,
      sortOrder: item.sortOrder,
      translations: {
        ...emptyTranslations(),
        ...item.translations,
      },
      removeAvatar: false,
    });
    setFiles({ beforeImage: null, afterImage: null, avatarImage: null });
    setPreviews({
      beforeImage: item.beforeImage?.url || "",
      afterImage: item.afterImage?.url || "",
      avatarImage: item.avatarImage?.url || "",
    });
    setActiveLocale("en");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function updateTranslation(field, value) {
    const nextValue = field === "detail" ? value.slice(0, beforeAfterDetailMaxLength) : value;

    setForm((current) => ({
      ...current,
      translations: {
        ...current.translations,
        [activeLocale]: {
          ...current.translations[activeLocale],
          [field]: nextValue,
        },
      },
    }));
  }

  function handleFileChange(name, file) {
    setFiles((current) => ({ ...current, [name]: file }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSaving(true);
    setError("");

    if (!form.countryId) {
      const message = "Ülke seçmelisin.";
      setError(message);
      toast({ title: "Eksik bilgi", description: message, variant: "destructive" });
      setIsSaving(false);
      return;
    }

    if (!form.id && (!files.beforeImage || !files.afterImage)) {
      const message = "Yeni kayıt için before ve after görselleri zorunlu.";
      setError(message);
      toast({ title: "Eksik görsel", description: message, variant: "destructive" });
      setIsSaving(false);
      return;
    }

    try {
      const formData = buildBeforeAfterFormData(form, files);
      if (form.id) {
        await updateAdminBeforeAfter(form.id, formData);
      } else {
        await createAdminBeforeAfter(formData);
      }
      toast({ title: "Kayıt kaydedildi", description: "Before/after içeriği güncellendi." });
      resetForm();
      await loadItems(1);
    } catch (err) {
      const message = err.response?.data?.error || "Kayıt kaydedilemedi.";
      setError(message);
      toast({ title: "Kayıt kaydedilemedi", description: message, variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  }

  async function handleStatusChange(item, status) {
    try {
      await updateAdminBeforeAfterStatus(item.id, status);
      toast({ title: "Status güncellendi", description: `${item.title} kaydı güncellendi.` });
      await loadItems(pagination.page);
    } catch (err) {
      const message = err.response?.data?.error || "Status güncellenemedi.";
      setError(message);
      toast({ title: "Status güncellenemedi", description: message, variant: "destructive" });
    }
  }

  async function handleDeleteConfirm() {
    if (!deleteTarget) return;

    setIsDeleting(true);
    try {
      await deleteAdminBeforeAfter(deleteTarget.id);
      toast({ title: "Kayıt silindi", description: `${deleteTarget.title} kaydı kaldırıldı.` });
      setDeleteTarget(null);
      await loadItems(pagination.page);
    } catch (err) {
      const message = err.response?.data?.error || "Silme işlemi yapılamadı.";
      setError(message);
      toast({ title: "Silme işlemi yapılamadı", description: message, variant: "destructive" });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      <div className="grid gap-6 min-[1680px]:grid-cols-[minmax(0,1fr)_28rem]">
        <section className="min-w-0">
          <BeforeAfterFilters filters={filters} onChange={setFilters} onRefresh={() => loadItems(pagination.page)} options={options} total={pagination.total} />

          {error ? <p className="mt-4 rounded-md bg-[#fff1f1] px-3 py-2 text-sm font-700 text-[#b53a3a]">{error}</p> : null}

          <BeforeAfterTable
            isLoading={isLoading}
            items={items}
            onDeleteRequest={setDeleteTarget}
            onEdit={startEdit}
            onPageChange={loadItems}
            onStatusChange={handleStatusChange}
            options={options}
            pagination={pagination}
            user={user}
          />
        </section>

        <BeforeAfterForm
          activeLocale={activeLocale}
          files={files}
          form={form}
          isSaving={isSaving}
          onFieldChange={updateField}
          onFileChange={handleFileChange}
          onLocaleChange={setActiveLocale}
          onReset={resetForm}
          onSubmit={handleSubmit}
          onTranslationChange={updateTranslation}
          options={options}
          previews={previews}
          user={user}
        />
      </div>

      <ConfirmDialog
        description={deleteTarget ? `${deleteTarget.title} kaydını siliyorsun. Bu işlem geri alınamaz.` : ""}
        isLoading={isDeleting}
        onConfirm={handleDeleteConfirm}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
        open={Boolean(deleteTarget)}
        title="Kayıt silinsin mi?"
      />
    </>
  );
}
