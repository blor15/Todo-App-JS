import React, { useEffect, useState } from "react";

import { getTasks } from "../api/tasks";

const Tasks = (props) => {

    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);

            const data = await getTasks();

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
                    return (
                        <div>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tasks;