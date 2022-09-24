const tasks=[
    {
        id:1,
        text:`Fixing chair's wheel`,
        day:`24th September at 5PM`,
        reminder:true,
    },
    {
        id:2,
        text:`Clean out garbage`,
        day:`25th September at 8PM`,
        reminder:false,
    },
    {
        id:3,
        text:`Send 20k to Math Company`,
        day:`24th September at 4PM`,
        reminder:true,
    }
]
const Tasks=()=>{
    return(
        <>
        {tasks.map((task) => (
            <h3>{task.text}</h3>
        ))}
        </>
    )
}
export default Tasks