import React from 'react';
import "./style.scss";
const Rating = () => {
  return (
    <section className="rating-outer section">
      <div className="container">
        <ul className="rating-sec">
          <li>
            <div className="rating-box">
              <div className="rating-icons">
                  <figure style={{width: `${5*20}%`,backgroundImage: `url('../images/rating.png')`}}></figure>
              </div>
              <strong>Dynamic Gameplay</strong>
            </div>
            <p>Dynamic Interface with customized avatars</p>
          </li>
          <li>
            <div className="rating-box">
              <div className="rating-icons">
                  <figure style={{width: `${5*20}%`,backgroundImage: `url('../images/rating.png')`}}></figure>
              </div>
              <strong>Instant Feedback</strong>
            </div>
            <p>Enjoy Real-time gameplay updates</p>
          </li>
          <li>
            <div className="rating-box">
              <div className="rating-icons">
                  <figure style={{width: `${5*20}%`,backgroundImage: `url('../images/rating.png')`}}></figure>
              </div>
              <strong>Data<br/> Science</strong>
            </div>
            <p>Create better teams and play smarter</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Rating;
