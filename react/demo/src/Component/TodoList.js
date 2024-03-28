import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './todoSlice';

const TodoList = () => {
  const [marked, setMarked] = useState([]);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are You Sure, Want to delete this todo !') == true) {
      dispatch(deleteTodo(id));
    }
  };

  const handleComplatedMark = (id) => {
    setMarked([...marked, id]);
  };
  return (
    <div className='todolist'>
      {todos.map((todo) => (
        <div className='newtodo'>
          <ul>
            <li
              key={todo.id}
              className={marked.includes(todo.id) ? 'mark' : ''}
            >
              <p>Note: {todo.note}</p>
              <p>Name: {todo.name}</p>
              <p>Email: {todo.email}</p>
              <p>Phone: {todo.phone}</p>
              <button onClick={() => handleComplatedMark(todo.id)}>
                Mark Complated
              </button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
