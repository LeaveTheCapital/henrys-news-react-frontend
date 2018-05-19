import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";

const Header = () => (
  <div id="header" className="col-sm" style={{background: `radial-gradient(circle at 30%, rosybrown, white 20%)`}}>
  <Link to='/' className="header-link">
    Henry's News
  </Link>
  </div>
);

export default Header;
