import React, { useState } from 'react'
import './input.css'

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch() 
  const addTodo = () => {
    if(!input) {
      alert("Todo cannot be empty!")
    }
    else{
      dispatch(saveTodo({
        item: input,
        done: false,
        id: Date.now()
      }));
    }
      setInput('');
  }
  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      addTodo()
    }
  }
    return (
    <div className='input'>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKeyDown}/>
        <button onClick={addTodo}>Add!</button>
    </div>

  )
}

export default Input