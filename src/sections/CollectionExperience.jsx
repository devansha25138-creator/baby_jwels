import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collectionThemes } from "../data/siteData.js";
import LuxuryButton from "../components/LuxuryButton.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function CollectionExperience() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const theme = collectionThemes[active];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const horizontalTween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          end: () => `+=${distance()}`,
          onUpdate: (self) => {
            const next = Math.min(
              collectionThemes.length - 1,
              Math.floor(self.progress * collectionThemes.length),
            );
            setActive(next);
          },
        },
      });

      gsap.utils.toArray(".collection-panel").forEach((panel) => {
        gsap.fromTo(
          panel.querySelector(".collection-image-wrap"),
          { scale: 0.92, autoAlpha: 0.65 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          },
        );
      });
    }, section);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="collection-experience"
      id="collections"
      style={{
        "--theme-bg": theme.bg,
        "--theme-text": theme.text,
        "--theme-accent": theme.accent,
        "--theme-glow": theme.glow,
      }}
    >
      <div className="theme-orb theme-orb--one" />
      <div className="theme-orb theme-orb--two" />
      <div className="theme-decor" aria-hidden="true">
        {theme.decor.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
      <div className="collection-track" ref={trackRef}>
        {collectionThemes.map((item, index) => (
          <article className="collection-panel" key={item.id} id={item.id}>
            <div className="collection-copy">
              <p>{item.eyebrow}</p>
              <h2>{item.headline}</h2>
              <span>{item.name}</span>
              <small>{item.copy}</small>
              <LuxuryButton href="#bestsellers" variant={index === 1 || index === 3 ? "light" : "gold"}>
                {item.cta}
              </LuxuryButton>
            </div>
            <div className="collection-image-wrap">
              <img src={item.image} alt={item.name} loading={index < 2 ? "eager" : "lazy"} />
            </div>
          </article>
        ))}
      </div>
      <div className="collection-progress" aria-hidden="true">
        {collectionThemes.map((item, index) => (
          <span key={item.id} className={index === active ? "is-active" : ""} />
        ))}
      </div>
    </section>
  );
}
