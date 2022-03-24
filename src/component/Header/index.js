import React from 'react';
import { Link,NavLink,useLocation } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const location = useLocation()
  //Open Close NAV
  const openMobMenu = () => {
    window.screen.width <= 991 && document.body.classList.add('mob-menu-open');
  }
  const hideMobMenu = () => {
    window.screen.width <= 991 && document.body.classList.remove('mob-menu-open');
  }
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="row header-inner">
          <div className="col-md-2 col-sm-3">
            <Link to='/' className="logo"><img src="../images/logo.png" alt="Logo"/></Link>
          </div>
          <div className="col-md-10 col-sm-9">
          <div className="menu-icon" onClick={openMobMenu}>
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
          </div>
          <div className="header-right">
            <nav>
              <div className="mob-nav-overlay" onClick={hideMobMenu}></div>
              <div className="menu-icon active" onClick={hideMobMenu}> 
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </div>
              <ul className="menu">
                <li>
                  <NavLink exact to='/' onClick={hideMobMenu}>Home</NavLink>
                </li>
                <li>
                  <Link to='/blog' className={location.pathname =='/blog' ? 'active':''} onClick={hideMobMenu}>Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
