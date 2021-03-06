import { createSlice } from '@reduxjs/toolkit'
import db from '../../Services/firebase';

const initialState = {
    todoList: []
}



const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          //state is current state
          var obj = action.payload;
          
          state.todoList.push(action.payload);
          //save to db
          db.ref('todos/' + obj.id).set(obj);
          state.todoList = state.todoList.sort((i1,i2) => Number(i1.done) - Number(i2.done))
      },
      setCheck: (state, action) => {
        state.todoList.forEach(item => {
          if(action.payload === item.id){
            if(item.done === true){
              item.done = false
            }else{
              item.done = true
            }
            db.ref(`todos/${item.id}`).update(item);
            return
          }
        })
        state.todoList = state.todoList.sort((i1,i2) => Number(i1.done) - Number(i2.done))
      },
      deleteTodo: (state, action) => {
        db.ref(`todos/${action.payload}`).remove();
        state.todoList = state.todoList.filter(item => item.id !== action.payload)
      },
      init: (state, action) => {
        state.todoList = []
        state.todoList = action.payload
        state.todoList = state.todoList.sort((i1,i2) => Number(i1.done) - Number(i2.done))
      } 
  }
});

export const { saveTodo, setCheck, init, deleteTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer