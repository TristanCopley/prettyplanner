import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Task from './Task'

function App() {

  const [tasks, setTasks] = useState([]);

  return (

    <div className='App flex flex-col w-full h-screen'>
      <div className="flex flex-col justify-center flex-wrap gap-2 bg-slate-900 h-full pb-16 p-3 pt-8 relative">
        {tasks.map((task, index) => {
          return <Task key={index} time={task.time} text={task.text}/>
        })}
      </div>
      <div className='flex'>
        <input type="text" placeholder="Time" id='time' className="w-24 h-10 bg-slate-900 text-white text-xl p-3 rounded-none outline outline-white outline-1 outline-offset-[-1px] border-none z-10"/>
        <input type="text" placeholder="Task" id='text' className="mx-[-1px] w-full h-10 bg-slate-900 text-white text-xl p-3 rounded-none outline-none border-none outline outline-white outline-1 outline-offset-[-1px]"/>
        <button className="bg-slate-800 text-white text-xl p-3 rounded-none h-10 flex justify-center border-none focus:outline-1 w-24 outline outline-white outline-1 outline-offset-[-1px]" onClick={
          () => {
            setTasks([...tasks, {time: document.getElementById('time').value, text: document.getElementById('text').value}])
          }
        }><span className='flex self-center text-center'>Add</span></button>
      </div>
    </div>
    
  )
}

export default App
