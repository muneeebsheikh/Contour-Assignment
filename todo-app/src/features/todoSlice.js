import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          //state is current state
          state.todoList.push(action.payload);
            //save to db
      }
  }
});

export const { saveTodo } = todoSlice.actions

export default todoSlice.reducer