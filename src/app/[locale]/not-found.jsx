import { ArrowLeft, LifeBuoy, MapPinned } from "lucide-react";
import ButtonLink from "@/components/site/common/buttonLink";

const quickLinks = [
  {
    title: "Return to the homepage",
    text: "Go back to the main page and continue exploring treatments, doctors, and patient support.",
    href: "/",
    icon: MapPinned,
  },
  {
    title: "Talk to our team",
    text: "If you were trying to reach something important, our coordination team can help you quickly.",
    href: "/contact",
    icon: LifeBuoy,
  },
];

export default function NotFound() {
  return (
    <main className="gridContainer relative overflow-hidden bg-light-bg py-[clamp(7rem,12vw,9.5rem)]">
      <div className="fluid absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-[70%] rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute right-[-5rem] top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <section className="relative">
        <div className="medical-texture soft-card overflow-hidden rounded-[1.25rem] bg-white/92">
          <div className="grid gap-10 px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(1.5rem,4vw,3rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(19rem,0.9fr)] lg:items-center">
            <div className="max-w-2xl">
              <span className="section-label">Error 404</span>
              <p className="mt-4 text-[clamp(4.5rem,16vw,9rem)] font-800 leading-none tracking-[-0.06em] text-primary/12">404</p>
              <h1 className="mt-3 max-w-xl text-[clamp(2rem,5.5vw,4.5rem)] font-800 leading-[0.97] text-primary">
                This page is
                <span className="serif-accent block">not available.</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-primary/66 sm:text-base">
                The page may have been moved, removed, or the link may be incomplete. You can return to the homepage or continue with the next best step from here.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/" className="min-w-[13rem]" icon={ArrowLeft} iconClassName="rotate-180">
                  Back to Home
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" className="min-w-[13rem]">
                  Contact Us
                </ButtonLink>
              </div>
            </div>

            <aside className="grid gap-4">
              {quickLinks.map(({ title, text, href, icon: Icon }) => (
                <article className="rounded-xl border border-primary/10 bg-white p-5 shadow-[0_18px_46px_rgba(11,60,93,0.06)]" key={href}>
                  <span className="flex size-11 items-center justify-center rounded-full bg-light-bg text-primary">
                    <Icon size={18} />
                  </span>
                  <h2 className="mt-4 text-lg font-800 text-primary">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-primary/62">{text}</p>
                  <ButtonLink href={href} variant="outline" className="mt-5 w-full justify-center" showArrow={false}>
                    Open Page
                  </ButtonLink>
                </article>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
