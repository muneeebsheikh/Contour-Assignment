import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';
import { selectTodoList } from './features/todoSlice';


// const todoList = [
//   {
//     item: 'todo1',
//     done: false,
//     id: 123
//   },
//   {
//     item: 'todo2',
//     done: false,
//     id: 1234
//   },
//   {
//     item: 'todo3',
//     done: true,
//     id: 12345
//   }
// ]

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__todoContainer'>
          {
            todoList
            .map(item => 
              <TodoItem 
                name={item.item} 
                done={item.done}
                id={item.id}
                key={item.id}
              />
            )
          }          
        </div>
        <Input />
      </div>

    </div>
  );
}

export default App;
