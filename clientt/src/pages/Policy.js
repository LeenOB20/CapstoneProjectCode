import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
     
          <p>We prioritize the protection of your personal information.</p>
          <p>Our Privacy Policy governs the collection, use, and management of your data.</p>
          <p>We require access to your email address for order confirmation</p>
          <p>Your email will only be used for transaction-related communication.</p>
          <p>We reserve the right to update our policies as needed.
</p>
          <p>By using our website, you agree to our policies,
             including our access to your email address for order confirmation. 
             If you have any questions, feel free to reach out to us. 
             Thank you for choosing CosmaZone!</p>
       
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
