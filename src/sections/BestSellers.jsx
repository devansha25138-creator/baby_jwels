import { useRef } from "react";
import { products } from "../data/siteData.js";
import { useReveal } from "../animations/useReveal.js";
import SectionIntro from "../components/SectionIntro.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function BestSellers() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="best-sellers section-shell" id="bestsellers" ref={ref}>
      <SectionIntro
        eyebrow="Most loved"
        title="Best Sellers"
        copy="Fine jewellery with soft light, elegant detail and keepsake-level finish."
      />
      <div className="product-grid">
        {products.map((product) => (
          <div data-reveal key={product.name}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
