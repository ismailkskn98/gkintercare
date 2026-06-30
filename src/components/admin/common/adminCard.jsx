import { cn } from "@/lib/utils";

export default function AdminCard({ children, className }) {
  return <section className={cn("rounded-lg border border-primary/10 bg-white shadow-sm", className)}>{children}</section>;
}

