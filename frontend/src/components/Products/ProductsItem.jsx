import "./ProductsItem.css";

const ProductsItem = () => {
  return (
    <li className="product-item glide__slide">
      <div className="product-image">
        <a href="#">
          <img src="img/products/product2/1.png" alt="" className="img1" />
          <img src="img/products/product2/2.png" alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          Ridley High Waist
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">$100.00</strong>
          <span className="old-price">$208.00</span>
        </div>
        <span className="product-discount">-33%</span>
        <div className="product-links">
          <button className="add-to-cart">
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <a href="#" className="product-link">
            <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProductsItem;
