import React from 'react';
import { Link } from 'react-router-dom'
import "./style.scss";
const BestTeams = ({onOpenModal}) => {
  return (
    <section className="best-teams section">
      <div className="container">
        <div className="head text-center">
          <h3 className="heading1">Assemble the best team<br/> and take on the world</h3>
          <p className="heading2">Experience the future of Fantasy Gaming. <Link to="" onClick={onOpenModal} className="download-play">Download and play for free.</Link></p>
          </div>
        <ul className="team-list">
          <li>
            <Link to="" onClick={onOpenModal}>
            <img src="../images/game-1.png" alt="game-icon-1"/>
            </Link>
          </li>
          <li>
            <Link to="" onClick={onOpenModal}>
            <img src="../images/game-2.png" alt="game-icon-2"/>
            </Link>
          </li>
          <li>
            <Link to="" onClick={onOpenModal}>
            <img src="../images/game-3.png" alt="game-icon-3"/>
            </Link>
          </li>
          <li>
            <Link to="" onClick={onOpenModal}>
            <img src="../images/game-4.png" alt="game-icon-4"/>
            </Link>
          </li>
          <li>
            <Link to="" onClick={onOpenModal}>
            <img src="../images/game-5.png" alt="game-icon-5"/>
            </Link>
          </li>
          <li>
            <Link to="" onClick={onOpenModal}>
            <img src="../images/game-6.png" alt="game-icon-6"/>
            </Link>
          </li>
        </ul>
        <div className="mobile-game text-center">
          <img src="../images/mobile-game.png" alt=""/>
        </div>
      </div>
    </section>
  );
};

export default BestTeams;
