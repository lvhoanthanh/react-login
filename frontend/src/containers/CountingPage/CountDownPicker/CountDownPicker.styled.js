import styled from "styled-components";
import { Button, Input } from "../../../components/common";

export const ButtonStyled = styled(Button)`
  margin: 30px 20px;
  color: ${(props) => (props.active ? "inheric" : "#fff")};
  background-color: ${(props) => (props.active ? "inheric" : "#ff6347")};
  border: ${(props) => (props.active ? "#fff" : "#ff6347")};
  &:hover {
    color: ${(props) => (props.active ? "#fff" : "#ff6347")};
    background-color: ${(props) => (props.active ? "inheric" : "#fff")};
    border: ${(props) => (props.active ? "#fff" : "#ff6347")};
  }
  &[disabled] {
    color: #ff6347;
    border: 1px solid #ff6347;
    background-color: #fff;
    opacity: 0.5;
  }
`;
export const InputStyled = styled(Input)``;

export const WrapperStyled = styled.div`
  display: flex;
  gap: 30px;
`;
