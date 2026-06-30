"use client";

import { Edit3, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminCard from "../common/adminCard";
import CustomSelect from "../common/customSelect";
import { statusLabels } from "./constants";
import StatusBadge from "./statusBadge";

export default function BeforeAfterTable({ isLoading, items, onDeleteRequest, onEdit, onPageChange, onStatusChange, options, pagination, user }) {
  return (
    <AdminCard className="mt-4 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] border-collapse text-left">
          <thead className="bg-light-bg text-xs font-800 uppercase text-muted">
            <tr>
              <th className="px-4 py-3">Görsel</th>
              <th className="px-4 py-3">Başlık</th>
              <th className="px-4 py-3">Ülke</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Sıra</th>
              <th className="px-4 py-3 text-right">Aksiyon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/10 text-sm">
            {isLoading ? (
              <tr>
                <td className="px-4 py-8 text-center text-muted" colSpan={7}>
                  <Loader2 className="mx-auto animate-spin" size={22} />
                </td>
              </tr>
            ) : items.length ? (
              items.map((item) => (
                <tr className="transition-colors hover:bg-light-bg/70" key={item.id}>
                  <td className="px-4 py-3">
                    <div className="flex w-24 overflow-hidden rounded-md border border-primary/10">
                      <img alt="" className="h-14 w-12 object-cover" src={item.beforeImage.url} />
                      <img alt="" className="h-14 w-12 object-cover" src={item.afterImage.url} />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-800 text-primary">{item.title}</p>
                    <p className="mt-1 max-w-xs truncate text-xs text-muted">{item.slug}</p>
                  </td>
                  <td className="px-4 py-3 text-muted">{item.country.name}</td>
                  <td className="px-4 py-3 text-muted">{item.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex min-w-44 items-center gap-2">
                      <StatusBadge status={item.status} />
                      <CustomSelect
                        className="w-36"
                        onChange={(status) => onStatusChange(item, status)}
                        options={options.statuses.map((status) => ({ value: status, label: statusLabels[status] || status }))}
                        value={item.status}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted">{item.sortOrder}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Button onClick={() => onEdit(item)} size="icon" title="Düzenle" type="button" variant="outline">
                        <Edit3 />
                      </Button>
                      <Button disabled={user?.role !== "ADMIN"} onClick={() => onDeleteRequest(item)} size="icon" title="Sil" type="button" variant="outline">
                        <Trash2 className="text-destructive" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-8 text-center text-muted" colSpan={7}>
                  Kayıt bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-primary/10 px-4 py-3 text-sm text-muted">
        <Button disabled={pagination.page <= 1} onClick={() => onPageChange(pagination.page - 1)} type="button" variant="outline">
          Önceki
        </Button>
        <span>
          {pagination.page} / {pagination.totalPages}
        </span>
        <Button disabled={pagination.page >= pagination.totalPages} onClick={() => onPageChange(pagination.page + 1)} type="button" variant="outline">
          Sonraki
        </Button>
      </div>
    </AdminCard>
  );
}
