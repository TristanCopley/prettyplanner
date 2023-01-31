import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Task from './Task'

function App() {

  const [tasks, setTasks] = useState([]);

  return (

    <div className='App flex flex-col w-full h-screen'>
      <div className="flex flex-col justify-center flex-wrap gap-1 bg-black h-full pb-16 p-3 pt-8 relative">
        {tasks.map((task, index) => {
          return <Task key={index} time={task.time} text={task.text}/>
        })}
      </div>
      <div className='flex justify-around'>
        <button className="bg-red-800 text-white text-xl p-3 rounded-none h-10 flex justify-center border-none focus:outline-1 w-24 outline outline-white outline-1 outline-offset-[-1px]" onClick={
            () => {
              let tasks2 = [...tasks];
              tasks2.pop();
              setTasks(tasks2);
            }
          }><span className='flex self-center text-center'>-</span></button>
        <button className="bg-green-800 text-white text-xl p-3 rounded-none h-10 flex justify-center border-none focus:outline-1 w-24 outline outline-white outline-1 outline-offset-[-1px]" onClick={
            () => {
              setTasks([...tasks, {time: " ", text: " "}])
            }
          }><span className='flex self-center text-center'>+</span></button>
      </div>
    </div>
    
  )
}

export default App
