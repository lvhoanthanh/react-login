import React, { Component } from "react";
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderUser,
  ImageStyled,
} from "./Header.styled";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLogo>
          <h2>
            <Link to="/">Home</Link>
          </h2>
        </HeaderLogo>
        <HeaderUser>
          <ImageStyled src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"></ImageStyled>
        </HeaderUser>
      </HeaderWrapper>
    );
  }
}

export default Header;
