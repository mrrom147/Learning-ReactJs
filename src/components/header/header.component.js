import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utity";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
        {

            !currentUser ?
                <Link className="option" to="/sign-in">
                    SIGN IN
                </Link>
                :
                <div onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
        }
    </div>
  </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
