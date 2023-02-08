import {useState} from "react";

import {
    TaskForm,
    TasksHeader,
    TasksList,
} from './components'

export default function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ]);

    const addTask = (text: string) => {
        const newTask = {
            text,
            id: Date.now(),
            done: false,
        };

        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: number) => {
        const filteredTasks = tasks.filter((t) => t.id !== id);
        setTasks(filteredTasks);
    };

    const toggleTask = (id: number) => {
        const realTask = tasks.find((t) => t.id === id);
        const index = tasks.findIndex((t) => t.id === id);
        const taskCopy = { ...realTask };
        const tasksListCopy = [...tasks];

        taskCopy.done = !taskCopy.done;
        tasksListCopy[index] = taskCopy;
        setTasks(tasksListCopy);
    };

    return (
        <div className="container">
            <article>
                <TasksHeader tasks={tasks} />
                <TasksList
                    tasks={tasks}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
                <footer>
                    <TaskForm addTask={addTask} />
                </footer>
            </article>
        </div>
    );
}
