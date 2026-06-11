export default function StatsBar({ stats, className = "" }) {
  return (
    <section className={`gridContainer bg-white ${className}`}>
      <div className="mx-auto w-full max-w-10/12 flex flex-col gap-6">
        {stats.map((stat) => {
          const isMetric = Boolean(stat.value);
          const value = stat.value || stat.title;
          const label = stat.label;
          const description = stat.description || stat.text || stat.label;

          return (
            <article
              className="flex min-h-24 flex-col justify-between gap-4 border-b border-primary/8 px-5 py-5 last:border-b-0 sm:min-h-[6.25rem] sm:flex-row sm:items-center sm:px-6"
              key={`${value}-${label}`}
            >
              <p className="max-w-[22rem] text-[0.8rem] leading-5 text-primary/64">{description}</p>

              <div className="shrink-0 text-left sm:w-36 sm:text-right">
                <strong
                  className={`block font-800 leading-none tracking-tight text-primary ${
                    isMetric ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {value}
                </strong>
                {label ? (
                  <span className="mt-1.5 block text-[0.62rem] font-800 uppercase tracking-[0.12em] text-muted">{label}</span>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
