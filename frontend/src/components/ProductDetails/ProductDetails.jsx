import Breadcrumb from "./Breadcrumb/Breadcrumb";
import "./ProductDetails.css";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductTabs from "./ProductTabs/ProductTabs";
export const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />

          <div className="single-content">
            <main className="site-main">
              <ProductGallery />
              <ProductInfo />
            </main>
          </div>

          <ProductTabs />
        </div>
      </div>
    </section>
  );
};
