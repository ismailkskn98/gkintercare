export default function StatsBar({ stats, className = "" }) {
  return (
    <section className={`gridContainer bg-white ${className}`}>
      <div className="mx-auto w-full max-w-10/12 flex flex-col gap-6">
        {stats.map((stat, index) => (
          <article
            className="flex min-h-24 flex-col justify-between gap-4 border-b border-primary/8 px-5 py-5 last:border-b-0 sm:min-h-[6.25rem] sm:flex-row sm:items-center sm:px-6"
            key={`${stat.value}-${stat.label}`}
          >
            <p className="max-w-[22rem] text-[0.8rem] leading-5 text-primary/64">{stat.description || stat.label}</p>

            <div className="shrink-0 text-left sm:w-36 sm:text-right">
              <strong className="block text-3xl font-800 leading-none tracking-tight text-primary sm:text-4xl">{stat.value}</strong>
              <span className="mt-1.5 block text-[0.62rem] font-800 uppercase tracking-[0.12em] text-muted">{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
