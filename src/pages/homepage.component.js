import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div>
    <h1>Home page</h1>
    <Link to="/shop">Shop page</Link>
  </div>
);

export default Homepage;
