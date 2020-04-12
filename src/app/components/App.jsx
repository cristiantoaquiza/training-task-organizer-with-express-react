import React, {useState, useEffect} from "react";

export const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5555/").then(res => res.json()).then(data => setTasks(data.tasks));
    }, []);

    return <ol>{tasks.map((task, index) => (<li key={index}>{task}</li>))}</ol>

}