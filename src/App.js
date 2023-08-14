
import './App.css';

import luislogo from './images/luis-logo.png'
import TaskForm from './components/TaskForm.js'
import TaskLists from './components/TaskList.js'

function App() {
  return (
    <div className="App">
     <div className='logo'>
    <img src={luislogo} className='todo-logo' />
     </div>
     <div className='task-list-principal'>
      <h1>My tasks</h1>
     
      <TaskLists />
     </div>
    </div>
  );
}

export default App;
