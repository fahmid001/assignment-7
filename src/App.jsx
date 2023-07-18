import React, { useState } from 'react';

function App() {
  const mystyle = {
    listStyleType: "none"
  };

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    taskList.splice(index,1)
    setTaskList([...taskList]);
  };

  return (
    <>
      <div>
        <form onSubmit={addTask}>
          <input type="text" value={task} onChange={handleTaskChange} />
          <button type="submit">Add Task</button>
        </form>

        <ul style={mystyle}>
          {taskList.map((task, index) => (
            <li className='list' key={index}>
              {task}
              <button className='button' onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
