"use client";

import { EyeOff, Plus, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminCard from "../common/adminCard";
import CountrySelect from "../common/countrySelect";
import CustomButton from "../common/customButton";
import CustomCheckbox from "../common/customCheckbox";
import CustomInput from "../common/customInput";
import CustomSelect from "../common/customSelect";
import CustomTextarea from "../common/customTextarea";
import ImageDropzone from "../common/imageDropzone";
import { beforeAfterDetailMaxLength, locales, statusLabels } from "./constants";

const beforeAfterImageAspect = 2 / 3;
const beforeAfterImageHelper = "Önerilen oran: 2:3 portre. Seçtiğin görsel yüklemeden önce bu orana kırpılır.";

export default function BeforeAfterForm({ activeLocale, files, form, isSaving, onFieldChange, onFileChange, onLocaleChange, onReset, onSubmit, onTranslationChange, options, previews, user }) {
  return (
    <AdminCard className="p-4 min-[1680px]:sticky min-[1680px]:top-20 min-[1680px]:self-start">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-800 text-primary">{form.id ? "Kaydı düzenle" : "Yeni kayıt"}</h2>
          <p className="mt-1 text-sm text-muted">{form.id ? `#${form.id}` : "Before/after içeriği"}</p>
        </div>
        {form.id ? (
          <Button onClick={onReset} size="icon" title="Yeni kayıt" type="button" variant="outline">
            <Plus />
          </Button>
        ) : null}
      </div>

      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CountrySelect countries={options.countries} onChange={(value) => onFieldChange("countryId", value)} value={form.countryId} />
          <CustomSelect
            label="Kategori"
            onChange={(value) => onFieldChange("categoryKey", value)}
            options={options.categories.map((category) => ({ value: category.key, label: category.label }))}
            value={form.categoryKey}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CustomSelect
            label="Status"
            onChange={(value) => onFieldChange("status", value)}
            options={options.statuses.map((status) => ({ value: status, label: statusLabels[status] || status }))}
            value={form.status}
          />
          <CustomInput label="Sıra" onChange={(event) => onFieldChange("sortOrder", event.target.value)} type="number" value={form.sortOrder} />
        </div>

        <CustomInput label="Slug" onChange={(event) => onFieldChange("slug", event.target.value)} placeholder="Boş kalırsa otomatik oluşur" value={form.slug} />

        <div>
          <div className="flex gap-2">
            {locales.map((locale) => (
              <Button className="h-9 flex-1" key={locale.key} onClick={() => onLocaleChange(locale.key)} type="button" variant={activeLocale === locale.key ? "default" : "secondary"}>
                {locale.label}
              </Button>
            ))}
          </div>

          <CustomInput
            className="mt-4"
            label="Başlık"
            onChange={(event) => onTranslationChange("title", event.target.value)}
            required={activeLocale === "en"}
            value={form.translations[activeLocale]?.title || ""}
          />

          <CustomTextarea
            className="mt-3"
            helperText={`Maksimum ${beforeAfterDetailMaxLength} karakter.`}
            label="Açıklama"
            maxLength={beforeAfterDetailMaxLength}
            onChange={(event) => onTranslationChange("detail", event.target.value)}
            showCount
            value={form.translations[activeLocale]?.detail || ""}
          />
        </div>

        <div className="space-y-3">
          <ImageDropzone
            cropAspect={beforeAfterImageAspect}
            cropDescription="Before görseli public sitede 2:3 portre kadrajda gösterilir. Önemli alanlar kesilmesin diye kadrajı burada ayarla."
            cropTitle="Before görselini 2:3 orana kırp"
            currentUrl={previews.beforeImage}
            file={files.beforeImage}
            helperText={beforeAfterImageHelper}
            label="Before görseli"
            name="beforeImage"
            onChange={onFileChange}
            previewClassName="aspect-[2/3] max-h-72"
          />
          <ImageDropzone
            cropAspect={beforeAfterImageAspect}
            cropDescription="After görseli public sitede 2:3 portre kadrajda gösterilir. Before görseliyle aynı hizaya gelecek şekilde kadrajı ayarla."
            cropTitle="After görselini 2:3 orana kırp"
            currentUrl={previews.afterImage}
            file={files.afterImage}
            helperText={beforeAfterImageHelper}
            label="After görseli"
            name="afterImage"
            onChange={onFileChange}
            previewClassName="aspect-[2/3] max-h-72"
          />
          <ImageDropzone currentUrl={previews.avatarImage} file={files.avatarImage} label="Harita avatarı" name="avatarImage" onChange={onFileChange} />
          {previews.avatarImage && form.id ? <CustomCheckbox checked={form.removeAvatar} label="Harita avatarını kaldır" onChange={(checked) => onFieldChange("removeAvatar", checked)} /> : null}
        </div>

        <div className="flex gap-2">
          <CustomButton className="flex-1" icon={Save} isLoading={isSaving} loadingText="Kaydediliyor..." type="submit">
            Kaydet
          </CustomButton>
          <Button onClick={onReset} size="" title="Temizle" type="button" variant="outline">
            <X />
          </Button>
        </div>

        {user?.role === "EDITOR" ? (
          <p className="flex items-center gap-2 rounded-md bg-light-bg px-3 py-2 text-xs font-700 text-muted">
            <EyeOff size={15} />
            Editörler kayıt silemez; sadece içerik ve status güncelleyebilir.
          </p>
        ) : null}
      </form>
    </AdminCard>
  );
}
