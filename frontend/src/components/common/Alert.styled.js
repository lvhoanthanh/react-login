import styled, { keyframes, css } from "styled-components";
//animation hidden alert element
// const alertAnimation = keyframes`
//   0%    { opacity: 1; }
//   25%   { opacity: 0.75; }
//   50%   { opacity: 0.5; }
//   75%   { opacity: 0.25; }
//   100%  { opacity: 0; }
// `;

export const Alert = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  // css alert by prop
  ${(props) => {
    if (props.type === "alert-success") {
      return `
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
      `;
    }
    if (props.type === "alert-danger") {
      return `
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      `;
    }
  }}
`;
