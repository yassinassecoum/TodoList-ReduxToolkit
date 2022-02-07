import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
  { id: 1, title: "Workout", completed: false },
  { id: 2, title: "Meeting at 14h", completed: false },
  { id: 3, title: "Party with friends", completed: false },
];
export const todosSlice = createSlice({
  name: "todos",
  initialState: { value: initialStateValue },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    updateTodoStatus: (state, action) => {
      state.value.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});
export const { addTodo, removeTodo, updateTodoStatus } = todosSlice.actions;
export default todosSlice.reducer;
