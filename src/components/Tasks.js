import React, { useEffect, useState } from "react";

import { getTasks } from "../api/tasks";

export const Tasks = (props) => {

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);

            const data = await getTasks();
            console.log(data);

            setLoading(false);

            setTasks(data);
        };
        fetchTasks();
    }, []);


    return (
        <div>
            <h2 className="task title">Tasks To Do</h2>
            <ul>
                {tasks.map((task) => {
                    console.log(task)
                    return (
                        <div key={task.id}>
                            <h2>Task: {task.title}</h2>
                            <p>Description: {task.description}</p>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tasks