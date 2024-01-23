import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Products from "../components/Products/Products";
import Sliders from "../components/Slider/Sliders";

import Campaigns from "../components/Campaigns/Campaigns";
import Blog from "../components/Blog/Blog";
import Brand from "../components/Band/Brand";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blog />
      <Brand />
      <CampaignSingle />
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
