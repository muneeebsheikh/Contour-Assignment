import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './Components/Input/input';
import TodoItem from './Components/TodoItem/TodoItem';
import db from './Services/firebase';
import { init, selectTodoList } from './Store/Reducers/todoSlice';


function App() {
  var todoList = useSelector(selectTodoList);
  const dispatch = useDispatch()
  
  useEffect(() => { // init list from DB
    async function func(){
      const dbRef = db.ref();
      var lst = []
      const snapshot = await dbRef.once('value', )
      var cv = snapshot.val()['todos']
        Object.keys(cv).forEach(key => {
          lst.push(cv[key]);
        }) 
      dispatch(init(lst)); 
    }
    func();
  }, [dispatch]);
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
