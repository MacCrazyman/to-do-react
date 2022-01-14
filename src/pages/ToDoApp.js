import { useState } from 'react';
import TaskItem from './task';

const ToDoApp = () => {
  const checkLocalStorage = () => {
    if (localStorage.toDoList == null) return [];
    return JSON.parse(localStorage.getItem('toDoList'));
  };

  const [toDoList, changeList] = useState(checkLocalStorage);

  const saveStorage = () => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  };

  const newTask = (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim() === '') return;
    changeList([...toDoList, { task: e.target.value, done: false, id: toDoList.length }]);
    e.target.value = '';
  };

  const toggleCheck = (id) => {
    const tempArray = [...toDoList];
    tempArray[id].done = !tempArray[id].done;
    changeList([...tempArray]);
  };

  const removeTask = (id) => {
    let tempArray = [...toDoList];
    tempArray = tempArray.filter((item) => item.id !== id);
    tempArray = tempArray.map((item, index) => ({
      ...item,
      id: index,
    }));
    changeList([...tempArray]);
  };

  const editTask = (e, id) => {
    if (e.target.value === '') return;
    const tempArray = [...toDoList];
    changeList(tempArray.map((item, index) => {
      const tempItem = item;
      if (index === id) tempItem.task = e.target.value;
      return tempItem;
    }));
    // e.target.value = '';
  };

  saveStorage();
  return (
    <div>
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
          <TaskItem
            list={toDoList}
            checkmark={toggleCheck}
            delete={removeTask}
            updateTask={editTask}
          />
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
