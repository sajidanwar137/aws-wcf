import React from 'react';
import "./style.scss";
const UserImm = ({onOpenModal}) => {
  return (
    <section className="user-imm section">
      <div className="container">
        <div className="head text-center">
          <h3 className="heading1">USER IMMERSIVE</h3>
          <p className="heading2">Next Generation In Game features </p>
        </div>
        <ul className="user-imm-list">
          <li>
            <figure><img src="../images/chat-icon.png" alt=""/></figure>
            <strong>IN GAME <br/>CHATS</strong>
          </li>
          <li>
            <figure><img src="../images/person-icon.png" alt=""/></figure>
            <strong>PERSONALIZED <br/>AVATARS</strong>
          </li>
          <li>
            <figure><img src="../images/video-icon.png" alt=""/></figure>
            <strong>VIDEO <br/>CONFERENCING</strong>
          </li>
          <li>
            <figure><img src="../images/live-icon.png" alt=""/></figure>
            <strong>LIVE <br/>FEED</strong>
          </li>
        </ul>
        <div className="bottom-para text-center">
          <p className="heading2">The best user experience on any esport platform for players and viewers alike.</p>
          <p className="heading2">Join players worldwide and compete in the next generation of fantasy gaming.</p>
          <div className=""><button type="button" onClick={onOpenModal} className="button">PLAY FOR FREE</button></div>
        </div>
      </div>
    </section>
  );
};

export default UserImm;
