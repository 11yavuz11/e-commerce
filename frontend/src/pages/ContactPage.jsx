import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Contact from "../components/Contact/Contact";

import React from "react";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
