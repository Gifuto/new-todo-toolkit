import Select from "react-select";
import {
  StyledContainer,
  StyledForm,
  StyledSpan,
  SelectStyles,
  SearchInput,
} from "./Filter.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTask, searchTask } from "../../store/todoSlice";

export const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const filterOptions = [
    { value: "all", label: "all" },
    { value: "completed", label: "completed" },
    { value: "incompleted", label: "incompleted" },
    { value: "text", input: "text" },
  ];

  const handleFilterItem = (tasks) => {
    dispatch(filterTask(tasks));
  };

  const handleSearchItem = (e) => {
    setValue(e.target.value)
    dispatch(searchTask(e.target.value));
    
  };

  return (
    <StyledContainer>
      <StyledForm>
        <StyledSpan>Filter:</StyledSpan>
        <Select
          options={filterOptions}
          defaultValue={filterOptions[0]}
          styles={SelectStyles}
          onChange={handleFilterItem}
        />
      </StyledForm>

      <StyledForm>
        <StyledSpan>Search:</StyledSpan>
        <SearchInput
          onChange={handleSearchItem}
          value={value}
          type="text"
        />
      </StyledForm>
    </StyledContainer>
  );
};
