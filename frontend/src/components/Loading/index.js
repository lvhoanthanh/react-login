import React, { Component } from "react";
import { LoadingWrapper, LoadingContent, Dots } from "./Loading.styled";
class Loading extends Component {
  render() {
    return (
      <LoadingWrapper>
        <LoadingContent>
          <Dots>
            <span></span>
            <span></span>
            <span></span>
          </Dots>
        </LoadingContent>
      </LoadingWrapper>
    );
  }
}
export default Loading;
