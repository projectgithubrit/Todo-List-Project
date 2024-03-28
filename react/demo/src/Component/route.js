import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';

// import NoPage from './pages/NoPage';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <nav>
        <ul className='navtag'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/todo'>Todo List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todo' element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
