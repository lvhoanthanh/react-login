import styled from "styled-components";
import { size } from "../styles/mixin";

export const Input = styled.input`
  ${size("100%", "40px")};
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0, 0.3);
  padding: 0 10px;
  /* border-bottom: 1px solid transparent; */
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.25px solid rgba(200, 200, 200, 0.5);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(200, 200, 200, 0.8);
  }
`;

export const InputWrapper = styled.div`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
`;
