import React from 'react';

const Task = ({time, text}) => {

    return (
        <div className='flex self-center justify-between gap-6 bg-gray-800 w-full'>
            <span className='w-20'>
                <input type="text" placeholder={time} className='w-20 flex-none text-l py-1 px-2 rounded-sm bg-slate-700 text-white rounded-xm border-none focus:outline-none z-10 text-left'/>  
            </span>
            <span className='w-full'>
                <input type="text" placeholder={text} className='w-full flex-none text-l py-1 px-2 rounded-sm bg-slate-700 text-white rounded-xm border-none focus:outline-none z-10 text-right'/>
            </span>
            </div>
    )
}

export default Task;