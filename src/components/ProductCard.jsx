import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="product-media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <img className="product-hover" src={product.hover} alt="" loading="lazy" />
        <button className="wishlist-button" aria-label={`Add ${product.name} to wishlist`}>
          <FiHeart />
        </button>
        <span className="product-badge">{product.badge}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.material}</p>
        </div>
        <div className="product-rating" aria-label={`${product.rating} rating`}>
          <FiStar />
          <span>{product.rating}</span>
        </div>
      </div>
      <div className="product-bottom">
        <strong>{product.price}</strong>
        <button aria-label={`Add ${product.name} to cart`}>
          <FiShoppingBag />
          Add
        </button>
      </div>
    </motion.article>
  );
}
