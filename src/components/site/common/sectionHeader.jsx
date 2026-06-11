export default function SectionHeader({
  label,
  title,
  accent,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="max-w-4xl text-3xl font-800 leading-tight text-primary md:text-5xl">
        {title} {accent ? <span className="serif-accent">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
