import './App.css';

function App() {
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
        <input type="text" placeholder="Enter new Task" />
        <ul className="taskList" />
      </div>
    </div>
  );
}

export default App;
