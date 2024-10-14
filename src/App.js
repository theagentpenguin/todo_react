
import './App.css';
import Tasks from './Tasks.js';
import { useState } from 'react';


const addTask = () => {
  console.log("adding a task")
}

const deleteTask = () =>{
  console.log("deleting a task")
}


function App() {
  const [newTask, setNewTask] = useState("")
  return (
    <div className="App">
      
        <div className="main">
            <h1>ToDo</h1>
            <form onSubmit={addTask}>
            <input type='text' value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <button>add</button>
            </form>
            <div className="tasks">
                <Tasks />
            </div>
            <div>
                <button>add</button>
            </div>
        </div>
    </div>
  );
}

export default App;
