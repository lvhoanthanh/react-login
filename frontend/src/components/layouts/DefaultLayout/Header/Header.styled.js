import styled from "styled-components";
import { Image } from "../../../common";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  h2 {
    font-size: 24px;
    color: red;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const HeaderUser = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #333;
  cursor: pointer;
  position: relative;
`;

export const ImageStyled = styled(Image)`
  overflow: hidden;
`;
