import styled, { css } from "styled-components";

export const Text = styled.p`
  color: red;
  margin-bottom: 10px;
  ${(props) => {
    switch (props.type) {
      case "medium":
        return css`
          font-size: 20px;
        `;
      case "large":
        return css`
          font-size: 22px;
        `;
      default:
        return css`
          font-size: 18px;
        `;
    }
  }}
`;

export const Title = styled.h2`
  color: red;
  margin-bottom: 15px;
  ${(props) => {
    switch (props.type) {
      case "medium":
        return css`
          font-size: 30px;
        `;
      case "large":
        return css`
          font-size: 40px;
        `;
      default:
        return css`
          font-size: 25px;
        `;
    }
  }}
`;
