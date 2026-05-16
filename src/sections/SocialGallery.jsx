import { useRef } from "react";
import { FiInstagram } from "react-icons/fi";
import { socialGallery } from "../data/siteData.js";
import { useReveal } from "../animations/useReveal.js";
import SectionIntro from "../components/SectionIntro.jsx";

export default function SocialGallery() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="social-gallery section-shell" ref={ref}>
      <SectionIntro
        eyebrow="NAZAKAT journal"
        title="Editorial Moments"
        copy="A soft gallery of gold, fabric, rituals and everyday beauty."
      />
      <div className="gallery-grid" data-reveal>
        {socialGallery.map((image, index) => (
          <a href="#instagram" className="gallery-item" key={image} aria-label="Open Instagram gallery item">
            <img src={image} alt={`NAZAKAT editorial gallery ${index + 1}`} loading="lazy" />
            <span>
              <FiInstagram />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
