import "./Brand.css";
import BrandItem from "./BrandItem";

const Brand = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <BrandItem />
          <BrandItem />
          <BrandItem />
          <BrandItem />
          <BrandItem />
          <BrandItem />
        </ul>
      </div>
    </section>
  );
};

export default Brand;
