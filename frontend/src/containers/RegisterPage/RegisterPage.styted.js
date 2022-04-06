import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100vh;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 400px;
    transform: translate(-50%, -50%);
    padding: 50px;
    border: 1px solid #ced4da;
    border-radius: 30px;
  }
`;
