import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "toolkit",
  initialState: {
    tasks: [],
    filtered: [],
  },
  reducers: {
    addTask(state, action) {
      const tasks = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      };
      state.tasks.push(tasks);
      state.filtered = [...state.tasks];
    },

    toggleTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.isCompleted = !task.isCompleted;
      state.filtered = [...state.tasks];
    },

    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.filtered = [...state.tasks];
    },

    filterTask(state, action) {
      state.filtered = [...state.tasks];

      if (action.payload.value === "completed") {
        state.filtered = state.filtered.filter((task) => task.isCompleted);
      }

      if (action.payload.value === "incompleted") {
        state.filtered = state.filtered.filter((task) => !task.isCompleted);
      }
    },

    searchTask(state, action) {
      state.filtered = [...state.tasks];

      if (action.payload !== "") {
        state.filtered = state.filtered.filter(
          (task) => task.text === action.payload
        );
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTask, removeTask, toggleTask, filterTask, searchTask } =
  todoSlice.actions;
