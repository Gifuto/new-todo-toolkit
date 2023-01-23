import { ListWrapper, TasksList } from "./List.styles";
import { Task } from "../Task/Task";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeTask, toggleTask } from "../../store/todoSlice";

export const List = () => {
  const filteredTasks = useSelector((state) => state.toolkit.filtered);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeTask(id));
  };

  const handleToggleItem = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ListWrapper>
      <TasksList>
        {filteredTasks.map((task) => {
          return (
            <Task
              id={task.id}
              key={task.id}
              text={task.text}
              isCompleted={task.isCompleted}
              handleRemoveItem={handleRemoveItem}
              handleToggleItem={handleToggleItem}
            />
          );
        })}
      </TasksList>
    </ListWrapper>
  );
};
