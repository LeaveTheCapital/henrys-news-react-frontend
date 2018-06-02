import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";

const Header = () => (
  <div id="header" className="col-sm" >

  <div id="anim" style={{background: `radial-gradient(ellipse at ${Date.now() % 100}%, #E94B3C, white 60%)`}}>
  <Link to='/' className="header-link">
    Henry's News
  </Link>
  </div>
  </div>
);

export default Header;
