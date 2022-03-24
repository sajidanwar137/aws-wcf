import React from 'react';
import SubscriberForm from "../../component/SubscriberForm";
import "./style.scss";
const Subscriber = () => {
  return (
    <>
    <section className="blog-subscriber-outer section">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-4 col-md-6 subscriber-left">
            <h3 className="heading2 mb-4">
            Subscribe 
            to our newsletter
            to get all the updates 
            and news about  WCF
            </h3>
            <SubscriberForm/>
          </div>
          <div className="offset-lg-1 col-lg-5 col-md-6 blog-subscriber-right">
              <img src="../images/blog-subscription.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Subscriber;
