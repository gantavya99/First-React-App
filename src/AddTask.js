import React from 'react'
import { useState }from 'react'
const AddTask = ({onAdd}) => {
    const[text,setText]=useState('');
    const[day,setDay]=useState('');
    const[reminder,setReminder]=useaState(false);
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!text){
            alert('Please Add a Task!');
            return;
        }
        onAdd(text,day,reminder);
    }
  return (
    <form class='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
    <label>Task</label>
    <input type='text' placeholder='Add Task'
    value={text}
    onChange={()=>setText(e.target.value)}/>
    </div>
    <div className='form-control'>
    <label>Day&Time</label>
    <input type='text' placeholder='Add Day & Time'
    value={day}
    onChange={()=>setDay(e.target.value)}/>
    </div>
    <div className='form-control form-control-check'>
    <label>Set Reminder</label>
    <input type='checkbox'
    value={reminder}
    onChange={()=>setReminder(e.currentTarget.checked)}/>
    </div>
    <input  type='submit' value='Save Task'
     className='btn btn-block'/>
    </form>
  )
}

export default AddTask