import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 100%;

  .d-flex {
    display: flex;
  }

  .d-none {
    display: none;
  }

  .horizontal-container {
    display: flex;
    width: 100%;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .align-center {
    align-items: center;
  }
  
  .center-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
  .help-block {
    color: red;
  }
  .text-center {
    text-align: center;
  }
  .form-box {
    margin-bottom: 1rem;
  }
  .mg-left-20 {
    margin-left: 20px!important;
  }
  .mg-top-53 {
    margin-top: 53px;
  }
  .pd-top-bottom-50 {
    padding: 50px 0;
  }
  .pd-50 {
    padding: 50px;
  }
  .alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export default GlobalStyles;
