import React from "react";
import './Filter.css';

const Filter = ({filterByTop, filterByPopular}) => (
  <section id="user-box" className="col-sm">
    <span onClick={filterByTop}>Top&nbsp;</span>
    <span onClick={filterByPopular}>Popular&nbsp;</span>
    <span>New</span>
  </section>
);

export default Filter;
