import React from 'react'
import ChangeTodo from './ChangeTask';
import { TaskProps } from './ChangeTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const Task = ({task}: {task: TaskProps}) => {
  const taskStyle = {
    textDecoration: task.isCompleted ? "line-through" : "none",
    opacity: task.isCompleted ? 0.5 : 1
  }
  return (
    <div style={taskStyle} className='w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl'>
      <ChangeTodo task={task}/> 
      <span className='text-center font-bold uppercase grow'>{task.title}</span>
      <div className='flex items-center mx-2'><EditTask task={task}/></div>
      <div className='flex items-center'><DeleteTask task={task}/></div>

    </div>
  )
}

export default Task
