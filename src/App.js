import { useState } from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
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
  return (
    <div className="App">
     <h1>
     <Header/>
     <Tasks tasks ={tasks} onDelete={deleteTask}/>  
     </h1>
    </div>
  );
}

export default App