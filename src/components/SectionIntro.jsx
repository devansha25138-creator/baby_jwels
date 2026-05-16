export default function SectionIntro({ eyebrow, title, copy, align = "center", dark = false }) {
  return (
    <div className={`section-intro section-intro--${align} ${dark ? "section-intro--dark" : ""}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
