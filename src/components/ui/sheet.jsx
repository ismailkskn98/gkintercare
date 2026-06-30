"use client";

import { X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

function Sheet({ ...props }) {
  return <DialogPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }) {
  return <DialogPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }) {
  return <DialogPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }) {
  return <DialogPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay
      className={cn("sheet-overlay fixed inset-0 z-80 bg-primary/42 backdrop-blur-sm", className)}
      data-slot="sheet-overlay"
      {...props}
    />
  );
}

function SheetContent({ children, className, side = "right", ...props }) {
  const sideClassName = {
    right: "inset-y-0 right-0 h-full w-full border-l sm:max-w-2xl lg:max-w-3xl",
    left: "inset-y-0 left-0 h-full w-full border-r sm:max-w-2xl lg:max-w-3xl",
  }[side];

  const sideAnimationClassName = {
    right: "sheet-content-right",
    left: "sheet-content-left",
  }[side];

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-80 flex flex-col border-primary/10 bg-white text-primary shadow-[0_24px_90px_rgba(11,60,93,0.22)] focus:outline-none will-change-transform",
          sideClassName,
          sideAnimationClassName,
          className,
        )}
        data-slot="sheet-content"
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="focus-ring absolute right-4 top-4 rounded-lg p-2 text-muted transition hover:bg-light-bg hover:text-primary">
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

function SheetTitle({ className, ...props }) {
  return <DialogPrimitive.Title className={cn("text-2xl font-800 leading-tight text-primary md:text-3xl", className)} {...props} />;
}

function SheetDescription({ className, ...props }) {
  return <DialogPrimitive.Description className={cn("text-sm leading-6 text-muted md:text-base md:leading-7", className)} {...props} />;
}

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger };

