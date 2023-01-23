import styled from "styled-components";

export const StyledInput = styled.input`
  width: 80%;
  font-size: 16px;
  height: 20px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 5px;
  outline: 0;
  outline-offset: 0;
  transition: 0.7s;

  &:hover {
    cursor: pointer;
    padding: 5px 20px 5px 5px;
    transition: 0.7s;
  }
`;
