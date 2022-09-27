import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskComponent from './components/TaskComponent';

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div className="App">
      <TaskInput setTasks={setTasks} tasks={tasks} />
      {
        tasks.map((element, index) => {
          return (
            <div key={index}>
              <TaskComponent task={element}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
