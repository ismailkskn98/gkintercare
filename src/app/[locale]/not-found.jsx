import ButtonLink from "@/components/site/common/buttonLink";

export default function NotFound() {
  return (
    <main className="gridContainer min-h-screen bg-light-bg py-28">
      <section className="mx-auto max-w-2xl text-center">
        <span className="section-label">404</span>
        <h1 className="mt-4 text-4xl font-800 text-primary md:text-6xl">Page not found</h1>
        <p className="mt-5 text-muted">
          The page you are looking for may have moved, or the address may be incorrect.
        </p>
        <ButtonLink className="mt-8" href="/">
          Back to Home
        </ButtonLink>
      </section>
    </main>
  );
}
