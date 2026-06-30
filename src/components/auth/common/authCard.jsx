import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthCard({ backHref, backLabel = "Girişe dön", children, description, title }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#eef5f8_0%,#ffffff_50%,#f7f2e8_100%)] px-5 py-10">
      <section className="w-full max-w-md rounded-lg border border-primary/10 bg-white p-6 shadow-[0_24px_70px_rgba(11,60,93,0.12)]">
        {backHref ? (
          <Link className="inline-flex items-center gap-2 text-sm font-800 text-primary/70 transition-colors hover:text-primary" href={backHref}>
            <ArrowLeft className="size-4" />
            {backLabel}
          </Link>
        ) : (
          <img alt="GK InterCare" className="h-12 w-auto" src="/images/logo/logo.png" />
        )}
        <h1 className="mt-8 text-3xl font-800 text-primary">{title}</h1>
        {description ? <p className="mt-2 text-sm leading-6 text-muted">{description}</p> : null}
        {children}
      </section>
    </main>
  );
}

