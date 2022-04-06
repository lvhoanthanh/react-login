import { css } from "styled-components";

export const shadow = () => {
  return `box-shadow: 0 4px 2px #777;`;
};

export const centerBox = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const size = (width, height) => css`
  width: ${width};
  height: ${height};
`;

export const image = (width, height, objectFit) => css`
  width: ${width};
  height: ${height};
  object-fit: ${objectFit};
`;
