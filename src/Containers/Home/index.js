import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import HomeBanner from "../../component/HomeBanner";
import ContactForm from "../../component/ContactForm";
import BestTeams from "../../component/BestTeams";
import UserImm from "../../component/UserImm";
import BrandNew from "../../component/BrandNew";
import Features from "../../component/Features";
import RatingSec from "../../component/RatingSec";
import SubscriberForm from "../../component/SubscriberForm";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
const Home = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
      setOpen(false)
  };
  return (
    <>
      {/* <Helmet>
        <title>World Champion Fantasy</title>
        <meta name="description" content="Experience the future of Fantasy Gaming at World Champion Fantasy. Join players worldwide and compete now!"/>
        <meta name="keywords" content="World Champion Fantasy keywords" />
      </Helmet> */}
      <HomeBanner onOpenModal={onOpenModal}/>
      <ContactForm />
      <BestTeams onOpenModal={onOpenModal}/>
      <UserImm onOpenModal={onOpenModal}/>
      <BrandNew onOpenModal={onOpenModal}/>
      <Features />
      <RatingSec />
      {/* <Subscriber /> */}
      <Modal open={open} onClose={onCloseModal} center>
          <div className="head">
            <h3 className="heading1">New Season</h3>
            <p>Sorry, the present season has ended.</p>
            <p>Leave us your email and get <span className="blue-color">Premium Access.</span></p>
            <p>We will send you a special invite for the new season.</p>
          </div>
          <div className="text-center">
            <SubscriberForm/>
          </div>
      </Modal>
    </>
  );
};

export default Home;
