import { useState } from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from './AddTask';
function App() {
  
 const [tasks, setTasks]=useState([
  {
    id:1,
    text:`Clean out the dustbins`,
    day:`24th September at 5PM`,
    reminder:true,
},
{
    id:2,
    text:`Fix chair's tyre`,
    day:`25th September at 8PM`,
    reminder:false,
},
{
    id:3,
    text:`Clean room`,
    day:`24th September at 4PM`,
    reminder:true,
}
 ])
      const deleteTask=(id)=>{
        console.log('Task Deleted')
        setTasks(tasks.filter((task)=>task.id!==id))
      }
      // const toggleReminder=(id)=>{
      //   console.log(id);
      // }
      const toggleReminder=(id)=>{
        setTasks(tasks.map((task)=>
        task.id===id?
        {...task,reminder:!task.reminder}:task))
        console.log(`${id} is the ID`);
      }
  return (
    <div className="App">
    
     <Header/>
     <AddTask/>
     {tasks.length>0?<Tasks tasks ={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder}/>:'No tasks Added'}
     
    </div>
  );
}

export default App