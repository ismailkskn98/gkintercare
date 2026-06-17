export default function SectionHeader({ label, title, accent, accentNewLine = false, description, align = "center", className = "" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-[clamp(0.75rem,1.4vw,1rem)] ${alignment} ${className}`}>
      {label ? <span className="section-label">{label}</span> : null}
      <h2 className="max-w-4xl text-[clamp(1.9rem,4.2vw,3rem)] font-800 leading-tight text-primary">
        {title}
        {accent ? <span className={`serif-accent ${accentNewLine ? "block" : ""}`}>{accent}</span> : null}
      </h2>
      {description ? <p className="max-w-2xl text-[clamp(0.95rem,1.4vw,1.125rem)] leading-7 text-muted md:leading-8">{description}</p> : null}
    </div>
  );
}
