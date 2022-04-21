import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCheck } from '../../Store/Reducers/todoSlice';

const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch();
    
    const handleCheck = () => {
      dispatch(setCheck(id));
    }
    const handleDelete = () => {
      dispatch(deleteTodo(id))
    }

    return (
    <div className='todoItem'>
        <Checkbox
            checked={done}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        <p className={done && 'todoItem--done'? 'todoItem--done' : undefined}>{name}</p>
        <div onClick={handleDelete}>
          <DeleteOutlinedIcon className='deleteTodo'/>
        </div>
    </div>
  )
}

export default TodoItem