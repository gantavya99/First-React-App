import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
            {task.text} <FaTimes className="X-icon" 
            onClick={()=>onDelete(task.id)} />
            <div className="day">{task.day}</div>
        </div>
    );
};

export default Task;
