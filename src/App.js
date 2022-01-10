import { useState } from 'react';
import './App.css';
import TaskItem from './task';

function App() {
  const [toDoList, changeList] = useState([]);

  const newTask = (e) => {
    if (e.keyCode !== 13) return;
    changeList([...toDoList, { task: e.target.value, done: false, id: toDoList.length - 1 }]);
    e.target.value = '';
  };

  return (
    <div className="App">
      <div className="header">
        <h1>
          To Do APP
        </h1>
        <h2>
          Using React
        </h2>
      </div>
      <div className="appContainer">
        <input type="text" placeholder="Enter new Task" onKeyDown={newTask} />
        <ul className="taskList">
          <TaskItem list={toDoList} />
        </ul>
      </div>
    </div>
  );
}

export default App;
