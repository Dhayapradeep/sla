import productImage from "../assets/product.jpg";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img
          src={productImage}
          alt="Local Product"
          className="product-image"
        />

        <h2>Smart Watch</h2>
        <p className="product-price">₹2,499</p>

        <button className="buy-button">
          Buy Now
        </button>
      </div>

      <div className="product-card">
        <img
          src="/public-product.jpg"
          alt="Public Product"
          className="product-image"
        />

        <h2>Wireless Headphones</h2>
        <p className="product-price">₹1,999</p>

        <button className="buy-button">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;