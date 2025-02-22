import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we are 24/7
            available
                      </p>
          <p className="mt-3">
            <BiMailSend /> : CosmaZone@hotmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +961-76576575
          </p>
          <p className="mt-3">
            <BiSupport /> : +961-81272477
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
