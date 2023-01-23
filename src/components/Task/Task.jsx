import { TaskWrapper, TaskDell, TaskText } from "./Task.styles";

export const Task = ({
  text,
  id,
  isCompleted,
  handleRemoveItem,
  handleToggleItem,
}) => {
  const complete = {
    color: "grey",
    textDecoration: "line-through",
    transition: "all 1s",
  };

  const incomplete = {
    color: "black",
    textDecoration: "none",
    transition: "all 1s",
  };

  // style={isCompleted===true?{textDecoration:'line-through', color: 'red', transition: 0.7}:{textDecoration:'none', transition: 0.7}}

  return (
    <TaskWrapper>
      <TaskText
        onClick={() => handleToggleItem(id)}
        status={isCompleted === true ? complete : incomplete}
      >
        {text}
      </TaskText>
      <TaskDell onClick={() => handleRemoveItem(id)}>X</TaskDell>
    </TaskWrapper>
  );
};
