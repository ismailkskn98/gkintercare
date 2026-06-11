import { Check } from "lucide-react";

export default function CheckList({ items, columns = false }) {
  return (
    <ul className={`grid gap-3 ${columns ? "md:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
            <Check size={15} strokeWidth={2.6} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
