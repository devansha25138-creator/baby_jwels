import { useRef } from "react";
import { FiGift, FiHeart, FiPenTool } from "react-icons/fi";
import { useReveal } from "../animations/useReveal.js";
import LuxuryButton from "../components/LuxuryButton.jsx";

export default function Gifting() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="gifting" id="gifts" ref={ref}>
      <div className="gift-bg" />
      <div className="gift-content" data-reveal>
        <p className="section-eyebrow">Gift blessings that last forever</p>
        <h2>Wrapped in champagne light.</h2>
        <p>
          Premium boxes, soft satin, personal notes and festive gold details for
          every first birthday, naming ceremony, wedding ritual and everyday
          expression of love.
        </p>
        <LuxuryButton href="#contact" variant="light">
          Discover Gifts
        </LuxuryButton>
      </div>
      <div className="gift-card-stack" data-reveal>
        <img
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=86"
          alt="Luxury jewellery gift packaging"
          loading="lazy"
        />
        <div className="gift-features">
          <span>
            <FiGift /> Premium packaging
          </span>
          <span>
            <FiPenTool /> Personalised options
          </span>
          <span>
            <FiHeart /> Gift wrap available
          </span>
        </div>
      </div>
    </section>
  );
}
