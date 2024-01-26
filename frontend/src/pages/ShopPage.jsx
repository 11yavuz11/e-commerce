import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

import React from "react";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </React.Fragment>
  );
};

export default ShopPage;
