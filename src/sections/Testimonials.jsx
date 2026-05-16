import { useRef } from "react";
import { FiStar } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/siteData.js";
import { useReveal } from "../animations/useReveal.js";
import SectionIntro from "../components/SectionIntro.jsx";

export default function Testimonials() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="testimonials section-shell" ref={ref}>
      <SectionIntro
        eyebrow="Client notes"
        title="Loved in Every Detail"
        copy="Quiet words from families and women who chose NAZAKAT for intimate moments."
      />
      <div data-reveal>
        <Swiper
          className="testimonial-swiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={22}
          loop
          autoplay={{ delay: 3600, disableOnInteraction: false }}
          breakpoints={{
            760: { slidesPerView: 2 },
            1080: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="testimonial-card">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar key={index} />
                  ))}
                </div>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.city}</span>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
