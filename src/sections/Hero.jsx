import { motion } from "framer-motion";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlides, assurances } from "../data/siteData.js";
import LuxuryButton from "../components/LuxuryButton.jsx";
import ParticleField from "../components/ParticleField.jsx";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1300}
        loop
        autoplay={{ delay: 4300, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="hero-slide">
              <img src={slide.image} alt="" />
              <div className="hero-overlay" />
              <ParticleField count={16} />
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 38 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="hero-eyebrow">{slide.eyebrow}</p>
                <h1>{slide.title}</h1>
                <p>{slide.copy}</p>
                <div className="hero-actions">
                  <LuxuryButton href="#bestsellers">Shop Collection</LuxuryButton>
                  <LuxuryButton href="#about" variant="ghost">
                    Explore Story
                  </LuxuryButton>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="assurance-strip">
        {assurances.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="assurance-item">
            <Icon />
            <span>{title}</span>
            <small>{copy}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
