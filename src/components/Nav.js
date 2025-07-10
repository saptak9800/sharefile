import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {


  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg side stickytop ${isDrawerOpen ? 'open' : ''}`}>
        <div className="container mx-md-5">
          <a className="navbar-brand" href="/">
            <span style={{ fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px', color: '#f0f0f0' }}>SHAREIT</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleDrawer}
          >
            <span className="navbar-toggler-icon">
              <img className="md-4" src="images/hamburger.png" alt="" />
            </span>
          </button>

          <div className={`offcanvas offcanvas-end ${isDrawerOpen ? 'show' : ''}`} tabIndex="-1">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title"></h5>
              <button type="button" className="btn-close" onClick={closeDrawer}></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* Removed 'How it works' and 'GitHub' links as per request */}
              </ul>
            </div>
          </div>


        </div>

      </nav>

    </>
  );
}