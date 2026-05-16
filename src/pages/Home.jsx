import { FiArrowRight, FiHeart, FiInstagram, FiStar } from "react-icons/fi";
import Navbar from "../components/Navbar.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import {
  buildWhatsAppOrderLink,
  collections,
  defaultOrderLink,
  featuredTestimonial,
  footerLinks,
  heroData,
  occasions,
  products,
  promiseData,
  trustStrip,
} from "../data/siteData.js";

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      {title ? <h2>{title}</h2> : null}
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

function ActionButton({ href, children, ghost = false, external = false }) {
  return (
    <a
      className={`action-button ${ghost ? "action-button--ghost" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <FiArrowRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              {heroData.eyebrow}
              <span>✦</span>
            </p>
            <h1>
              {heroData.title}
              <em>{heroData.accent}</em>
            </h1>
            <div className="hero-divider" />
            <p className="hero-description">{heroData.copy}</p>
            <div className="hero-actions">
              <ActionButton href={heroData.primaryCta.href}>{heroData.primaryCta.label}</ActionButton>
              <ActionButton href={heroData.secondaryCta.href} ghost>
                {heroData.secondaryCta.label}
              </ActionButton>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-media-glow" />
            <img src={heroData.image} alt="NAZAKAT Kidz hero jewellery portrait" />
          </div>

          <div className="hero-features">
            {heroData.highlights.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="collections">
          <SectionHeading
            eyebrow="EXPLORE OUR COLLECTIONS"
            title="Timeless pieces designed with love, protection and elegance."
          />
          <div className="collection-grid">
            {collections.map((item) => (
              <a key={item.title} className="collection-card" href={item.href}>
                <div className="collection-card__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <h3>{item.title}</h3>
                <span>
                  <FiArrowRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="promise-section section-block" id="story">
          <div className="promise-media">
            <img src={promiseData.image} alt="NAZAKAT gift box and jewellery" loading="lazy" />
          </div>

          <div className="promise-copy">
            <p>{promiseData.eyebrow}</p>
            <h2>
              {promiseData.title}
              <em>{promiseData.accent}</em>
            </h2>
            <span>{promiseData.copy}</span>
            <ActionButton href={promiseData.cta.href} ghost>
              {promiseData.cta.label}
            </ActionButton>
          </div>

          <div className="promise-points">
            {promiseData.points.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="occasions">
          <SectionHeading eyebrow="SHOP BY OCCASION" title="" />
          <div className="occasion-grid">
            {occasions.map((occasion) => (
              <a key={occasion.title} className="occasion-card" href={occasion.href}>
                <img src={occasion.image} alt={occasion.title} loading="lazy" />
                <div className="occasion-card__overlay" />
                <div className="occasion-card__content">
                  <h3>{occasion.title}</h3>
                  <FiArrowRight aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section-block bestsellers-section" id="bestsellers">
          <SectionHeading eyebrow="BEST SELLERS" title="" />
          <div className="bestseller-grid">
            {products.map((product) => (
              <a
                key={product.name}
                className="product-card"
                href={buildWhatsAppOrderLink(product.name)}
                target="_blank"
                rel="noreferrer"
              >
                <div className="product-card__media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span aria-hidden="true">
                    <FiHeart />
                  </span>
                </div>
                <div className="product-card__meta">
                  <h3>{product.name}</h3>
                  <p>{product.material}</p>
                  <strong>{product.price}</strong>
                </div>
              </a>
            ))}

            <article className="testimonial-card">
              <div className="testimonial-card__quote">“</div>
              <p>{featuredTestimonial.quote}</p>
              <div className="testimonial-card__stars" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} />
                ))}
              </div>
              <strong>
                {featuredTestimonial.name}, {featuredTestimonial.city}
              </strong>
            </article>
          </div>

          <div className="bestsellers-action">
            <ActionButton href="#collections">View All Collections</ActionButton>
          </div>
        </section>
      </main>

      <section className="trust-strip">
        {trustStrip.map(({ icon: Icon, title, copy }) => (
          <article key={title}>
            <Icon />
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer" id="footer">
        <div className="footer-brand">
          <h2>NAZAKAT KIDZ</h2>
          <p>Soft gold keepsakes designed for tiny wrists, beautiful gifting and everyday blessings.</p>
          <ActionButton href={defaultOrderLink} external>
            Order on WhatsApp
          </ActionButton>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title} className="footer-column">
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-column footer-column--social">
          <h3>Follow</h3>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram />
            Instagram
          </a>
          <a href={defaultOrderLink} target="_blank" rel="noreferrer">
            <span>WhatsApp Orders</span>
          </a>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
