import {
  Link, Outlet,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/">To do APP</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
