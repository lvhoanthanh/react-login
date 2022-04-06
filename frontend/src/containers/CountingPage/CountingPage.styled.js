import styled from "styled-components";

export const CountDownWrapper = styled.div`
  width: 100vh;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  .countdown-box {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 1000px;
    transform: translate(-50%, -50%);
    padding: 50px;
    border: 1px solid #ced4da;
    border-radius: 30px;

    .countdown-list {
      display: flex;
      gap: 30px;
      padding: 20px 0;
      .countdown-item {
        padding: 20px 40px;
        border: 1px solid #ced4da;
        .countdown-number {
          margin: 0;
          font-size: 48px;
        }
        span {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
`;
