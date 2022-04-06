import styled from "styled-components";

const setColumRow = (col) => {
  switch (col) {
    case "1": {
      return "8.333333%";
    }
    case "2": {
      return "16.666667%";
    }
    case "3": {
      return "25%";
    }
    case "4": {
      return "33.333333%";
    }
    case "5": {
      return "41.666667%";
    }
    case "6": {
      return "50%";
    }
    case "7": {
      return "58.333333%";
    }
    case "8": {
      return "66.666667%";
    }
    case "9": {
      return "75%";
    }
    case "10": {
      return "83.333333%";
    }
    case "12": {
      return "100%";
    }
    default:
      return 0;
  }
};
const setOffsetColumn = (offset) => {
  switch (offset) {
    case "2":
      return "16.666667%";
    case "3":
      return "25%";
    case "4":
      return "16.666667%";
    case "5":
      return "16.666667%";
    case "6":
      return "50%";
    case "7":
      return "58.333333%";
    case "8":
      return "66.666667%";
    case "9":
      return "75%";
    default:
      return 0;
  }
};
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  position: relative;
  min-height: 1px;
  width: ${(props) => setColumRow(props.col)};
  margin-left: ${(props) => setOffsetColumn(props.offset)};
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;
