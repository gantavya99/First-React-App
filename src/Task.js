import React from 'react';
const Task = ({task}) => {
  return (
    <div className='task'>
        {task.text}
        <div className='day'>{task.day}</div>
        </div>
  )
}

export default Task