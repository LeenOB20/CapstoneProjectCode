import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us "}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to CosmaZone, where passion meets expertise in the heart of Lebanon's beauty landscape. Founded by Haneen Obeid and Zackariah Khoder, CosmaZone is more than just an online store – it's a commitment to excellence and personalized service. Drawing from their experience as pharmacists and entrepreneurs at Pharmazone, their acclaimed Achrafieh pharmacy, Haneen and Zackariah have curated a selection of top-notch cosmetics tailored to the Lebanese market. With a focus on quality, convenience, and community, CosmaZone offers a seamless shopping experience with expertly curated products, secure transactions, and responsive customer service. Join us as we redefine beauty shopping for Lebanon and beyond at CosmaZone – your destination for all things beauty.  </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
