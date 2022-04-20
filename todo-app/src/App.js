import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';
import db from './features/firebase';
import { init, selectTodoList } from './features/todoSlice';


function App() {
  var todoList = useSelector(selectTodoList);
  const dispatch = useDispatch()
  useEffect(() => { // init list from DB
    let keys = [];
    let dbVals = {}
    var lst = []
    const dbRef = db.ref();
    dbRef.once('value', (snapshot) => {
      snapshot.forEach(child => {
        var cv = child.val();
        Object.keys(cv).forEach(key => {
          lst.push(cv[key]);
        })
      })
    }).then(_ => dispatch(init(lst)))    
  }, []);
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
