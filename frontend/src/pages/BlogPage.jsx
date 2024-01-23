import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Blog from "../components/Blog/Blog";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="blog-page">
        <Blog />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;
