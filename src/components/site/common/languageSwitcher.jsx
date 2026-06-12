"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { TbWorld } from "react-icons/tb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";

const languageOptions = [
  { code: "en", flag: "https://flagcdn.com/24x18/us.png", translationKey: "english" },
  { code: "es", flag: "https://flagcdn.com/24x18/es.png", translationKey: "spanish" },
  { code: "it", flag: "https://flagcdn.com/24x18/it.png", translationKey: "italian" },
];

export default function LanguageSwitcher({ bgWhite = false }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Common.languages");
  const currentLanguage = languageOptions.find((item) => item.code === locale) || languageOptions[0];

  function handleLocaleChange(value) {
    const currentSearchParams = Object.fromEntries(searchParams.entries());

    startTransition(() => {
      router.replace({ pathname, query: currentSearchParams }, { locale: value, scroll: false });
    });
  }

  return (
    <article className={`flex w-fit items-center gap-1 pl-2 transition-opacity ${isPending ? "opacity-60" : "opacity-100"}`}>
      {!bgWhite ? <TbWorld aria-hidden="true" className="text-2xl" /> : null}

      <Select disabled={isPending} onValueChange={handleLocaleChange} value={locale}>
        <SelectTrigger
          aria-label={`${t("label")}: ${t(currentLanguage.translationKey)}`}
          className={`h-fit w-fit cursor-pointer justify-start border-none bg-transparent px-0 py-0 text-sm font-800 shadow-none ring-0 transition-all duration-200 focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-0 ${
            bgWhite ? "text-primary/70 hover:text-primary focus:text-primary active:text-primary" : "text-white/75 hover:text-white focus:text-white active:text-white"
          }`}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent align="end" className="min-w-[9.5rem] rounded-lg border border-primary/10 bg-white p-1 text-primary shadow-xl" position="popper">
          {languageOptions.map((item) => (
            <SelectItem className="cursor-pointer rounded-[6px] px-2 py-2 text-primary focus:bg-light-bg focus:text-primary" key={item.code} value={item.code}>
              <span className="flex flex-nowrap items-center gap-2 text-xs font-700">
                <Image alt={t(item.translationKey)} className="h-3 w-4 rounded-[2px] object-cover" height={18} src={item.flag} width={24} />
                <span>{t(item.translationKey)}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </article>
  );
}
