import { StyledInput } from "./Input.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/todoSlice";

export const Input = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e.code === "Enter" && value.trim()) {
      dispatch(addTask(value));
      setValue("");
    }
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleSubmit}
    />
  );
};
