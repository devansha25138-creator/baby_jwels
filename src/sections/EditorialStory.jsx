import { useRef } from "react";
import { FiFeather, FiShield, FiSun } from "react-icons/fi";
import { useReveal } from "../animations/useReveal.js";
import LuxuryButton from "../components/LuxuryButton.jsx";

export default function EditorialStory() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="editorial-story" id="about" ref={ref}>
      <div className="editorial-image" data-reveal>
        <img
          src="https://images.unsplash.com/photo-1450297350677-623de575f31c?auto=format&fit=crop&w=1400&q=86"
          alt="Jewellery artisan at work"
          loading="lazy"
        />
      </div>
      <div className="editorial-copy" data-reveal>
        <p className="section-eyebrow">Our atelier</p>
        <h2>
          Jewellery that feels <em>blessed</em>, not merely worn.
        </h2>
        <p>
          NAZAKAT is built around the emotion of protection, beauty and ceremony.
          Every piece is imagined like a small heirloom: gentle enough for daily
          wear, luminous enough for celebration, and finished with a boutique eye
          for proportion.
        </p>
        <div className="editorial-points">
          <span>
            <FiShield /> Certified gold
          </span>
          <span>
            <FiFeather /> Baby-safe finish
          </span>
          <span>
            <FiSun /> Soft cinematic shine
          </span>
        </div>
        <LuxuryButton href="#gifts" variant="ghost">
          Discover Our Story
        </LuxuryButton>
      </div>
    </section>
  );
}
