import React, { Component } from "react";
import { FooterWrapper, TextStyled } from "./Footer.styled";

class Header extends Component {
  render() {
    return (
      <FooterWrapper>
        <TextStyled>
          Copyright 1999-2022 by Refsnes Data. All Rights Reserved.
        </TextStyled>
      </FooterWrapper>
    );
  }
}

export default Header;
