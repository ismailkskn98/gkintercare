import { statusLabels } from "./constants";

export default function StatusBadge({ status }) {
  const className =
    status === "PUBLISHED"
      ? "bg-[#eef8f2] text-[#247348]"
      : status === "UNPUBLISHED"
        ? "bg-[#fff7e7] text-[#9a6a00]"
        : "bg-primary/8 text-primary/70";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-800 ${className}`}>{statusLabels[status] || status}</span>;
}

