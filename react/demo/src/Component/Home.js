import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from './todoSlice';

const TodoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: nanoid(),
        note,
        name,
        email,
        phone,
      })
    );
    setNote('');
    setName('');
    setEmail('');
    setPhone('');
    navigate('/todo');
  };

  return (
    <div class='container'>
      <div class='todoList'>
        <h2>Todo List</h2>
        <form className='formBox' onSubmit={handleSubmit}>
          <div className='demo'>
            <div className='note fieldBx'>
              <label>Note:</label>
              <input
                className='formControl'
                type='text'
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder='Note'
                required
              />
            </div>
            <div className='name fieldBx'>
              <label>Name:</label>
              <input
                className='formControl'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                required
              />
            </div>
            <div className='email fieldBx'>
              <label>Email:</label>
              <input
                className='formControl'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            <div className='phone fieldBx'>
              <label>Phone:</label>
              <input
                className='formControl'
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Phone'
                required
              />
            </div>
            <div className='btn fieldBx'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
