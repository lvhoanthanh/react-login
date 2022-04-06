import styled, { keyframes } from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const LoadingContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const dotTypingAnimation = keyframes`
  0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-15px);
	}
`;

export const Dots = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: #fff;
    background-color: #fff;
    animation: ${dotTypingAnimation} 1.3s linear infinite;
    &:nth-child(2) {
      animation-delay: -1.1s;
    }
    &:nth-child(3) {
      animation-delay: -0.9s;
    }
  }
`;
