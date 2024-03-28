import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TodoForm from './Component/Home';
import TodoList from './Component/TodoList';
import AppRoute from './Component/route';
import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <TodoForm />
        <TodoList /> */}
        <AppRoute />
      </div>
    </Provider>
  );
};

export default App;
