import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "toolkit",
  initialState: {
    tasks: [],
    filtered: [],
    searched: [],
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
      state.searched = [...state.filtered]
    },

    toggleTask(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.isCompleted = !task.isCompleted;
      state.filtered = [...state.tasks];
      state.searched = [...state.filtered]
    },

    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.filtered = state.filtered.filter((task) => task.id !== action.payload);
      state.searched = state.searched.filter((task) => task.id !== action.payload);
    },

    filterTask(state, action) {
      state.filtered = [...state.tasks];

      if (action.payload.value === "completed") {
        state.filtered = state.filtered.filter((task) => task.isCompleted);
          
      }

      if (action.payload.value === "incompleted") {
        state.filtered = state.filtered.filter((task) => !task.isCompleted);
      }

      state.searched = [...state.filtered]
    
    },

    searchTask(state, action) {
      state.searched = [...state.filtered]
      state.searched = state.searched.filter(
        (task) => task.text.toLowerCase().includes(action.payload.toLowerCase())
      );
  
    },
  },
});

export default todoSlice.reducer;
export const { addTask, removeTask, toggleTask, filterTask, searchTask } =
  todoSlice.actions;
