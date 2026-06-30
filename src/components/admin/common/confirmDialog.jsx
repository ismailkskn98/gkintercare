"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ConfirmDialog({ cancelLabel = "Vazgeç", confirmLabel = "Sil", description, isLoading = false, onConfirm, onOpenChange, open, title }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="size-5" />
          </div>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled={isLoading} onClick={() => onOpenChange?.(false)} type="button" variant="outline">
            {cancelLabel}
          </Button>
          <Button disabled={isLoading} onClick={onConfirm} type="button" variant="destructive">
            {isLoading ? "Siliniyor..." : confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

