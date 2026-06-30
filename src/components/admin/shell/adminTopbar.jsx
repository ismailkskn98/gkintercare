"use client";

import { ChevronDown, LogOut, Menu, UserCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AdminTopbar({ isLoggingOut, onLogout, onMenuClick, user }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-primary/10 bg-white/92 px-4 backdrop-blur lg:px-8">
      <button className="rounded-md border border-primary/10 p-2 text-primary transition-colors hover:bg-light-bg lg:hidden" onClick={onMenuClick} type="button">
        <Menu size={20} />
      </button>

      <div className="hidden min-w-0 md:block">
        <p className="text-sm font-800 text-primary">Yönetim Paneli</p>
        <p className="text-xs text-muted">İçerikleri ve görünürlüğü buradan yönet.</p>
      </div>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            className="ml-auto inline-flex max-w-[14rem] items-center gap-2 rounded-md border border-primary/10 bg-white px-3 py-2 text-left transition-colors hover:bg-light-bg focus-ring"
            type="button"
          >
            <UserCircle className="size-5 shrink-0 text-accent" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-800 text-primary">{user.name}</span>
              <span className="block truncate text-xs text-muted">{user.email}</span>
            </span>
            <ChevronDown className="size-4 shrink-0 text-muted" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 border border-primary/10 bg-white p-2">
          <DropdownMenuLabel className="px-2 py-2">
            <span className="block text-sm font-800 text-primary">{user.name}</span>
            <span className="block text-xs font-600 text-muted">{user.role}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer px-2 py-2 text-sm font-800 text-destructive" disabled={isLoggingOut} onSelect={onLogout}>
            <LogOut className="size-4" />
            {isLoggingOut ? "Çıkış yapılıyor..." : "Çıkış yap"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
