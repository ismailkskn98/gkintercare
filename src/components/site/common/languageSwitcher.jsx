"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { TbWorld } from "react-icons/tb";

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
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            aria-label={`${t("label")}: ${t(currentLanguage.translationKey)}`}
            className={`flex h-fit w-fit cursor-pointer items-center gap-1 border-none bg-transparent px-0 py-0 text-sm font-800 shadow-none ring-0 transition-all duration-200 focus-visible:outline-0 ${
              bgWhite ? "text-primary/70 hover:text-primary focus:text-primary active:text-primary" : "text-white/75 hover:text-white focus:text-white active:text-white"
            }`}
            disabled={isPending}
            type="button"
          >
            <TbWorld aria-hidden="true" className="text-2xl" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-38 rounded-lg border border-primary/10 bg-white p-1 text-primary shadow-xl">
          {languageOptions.map((item) => (
            <DropdownMenuItem className="cursor-pointer rounded-md px-2 py-2 text-primary focus:bg-light-bg focus:text-primary" key={item.code} onClick={() => handleLocaleChange(item.code)}>
              <span className="flex w-full items-center justify-between gap-3 text-xs font-700">
                <span className="flex flex-nowrap items-center gap-2">
                  <Image alt={t(item.translationKey)} className="h-3 w-4 rounded-xs object-cover" height={18} src={item.flag} width={24} />
                  <span>{t(item.translationKey)}</span>
                </span>
                <span aria-hidden="true" className="flex size-4 items-center justify-center">
                  {item.code === locale ? <CheckIcon className="size-3.5" /> : null}
                </span>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </article>
  );
}
