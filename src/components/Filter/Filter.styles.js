import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-bottom: 10px;
`;

export const StyledForm = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
`;

export const StyledSpan = styled.span`
  font: 16px bold;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SelectStyles = {
  control: (styles) => ({
    ...styles,
    width: "150px",
    border: "1px solid red",
    // This line disable the blue border
    boxShadow: "0 !important",
    transition: "0.7s",
    "&:hover": {
      width: "160px",
    },
  }),

  option: (styles) => ({
    ...styles,
    backgroundColor: "white",
    color: "black",
    padding: "5px",
    "&:hover": {
      color: "red",
    },
  }),
};

export const SearchInput = styled.input`
  border: 1px solid red;
  border-radius: 5px;
  padding: 5px;
  padding: 5px;
  outline: 0;
  outline-offset: 0;
  transition: 0.7s;

  &:hover {
    cursor: pointer;
    padding: 5px 15px 5px 5px;
    transition: 0.7s;
  }
`;
