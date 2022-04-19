import React from 'react'
import './TodoItem.css'

import Checkbox from '@material-ui/core/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const TodoItem = ({name, done, id}) => {
    
    const handleCheck = () =>{

    }


    return (
    <div className='todoItem'>
        <Checkbox
            checked={done}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        <p className={done && 'todoItem--done'? 'todoItem--done' : undefined}>{name}</p>
    </div>
  )
}

export default TodoItem