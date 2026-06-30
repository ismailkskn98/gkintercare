"use client";

import { LogOut, X } from "lucide-react";
import Link from "next/link";
import CustomButton from "../common/customButton";

export default function AdminSidebar({ isLoggingOut, isOpen, navItems, onClose, onLogout, pathname, user }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-primary/10 bg-white transition-transform lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex h-16 items-center justify-between border-b border-primary/10 px-5">
        <Link className="flex items-center gap-3 font-800 text-primary" href="/admin/before-after" onClick={onClose}>
          <img alt="GK InterCare" className="h-9 w-auto" src="/images/logo/logo.png" />
          <span>Admin</span>
        </Link>
        <button className="rounded-md p-2 text-primary transition-colors hover:bg-light-bg lg:hidden" onClick={onClose} type="button">
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-800 transition-colors ${isActive ? "bg-primary text-white shadow-sm" : "text-primary/70 hover:bg-light-bg hover:text-primary"}`}
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-primary/10 p-4">
        <div className="rounded-lg bg-light-bg p-3">
          <p className="text-sm font-800 text-primary">{user.name}</p>
          <p className="mt-1 text-xs text-muted">{user.role}</p>
        </div>
        <CustomButton className="mt-4 w-full" icon={LogOut} isLoading={isLoggingOut} loadingText="Çıkış yapılıyor..." onClick={onLogout} type="button" variant="outline">
          Çıkış yap
        </CustomButton>
      </div>
    </aside>
  );
}

