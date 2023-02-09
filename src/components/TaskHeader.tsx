import {useSelector} from "react-redux"

import {RootState} from "../store"

const TasksHeader = () => {
    const tasks = useSelector((state: RootState) => state.todo)
    const undoneTasks = tasks.filter((t) => t.completed === false);

    return (
        <header>
            <h1>React - Redux Toolkit / Todo List</h1>
            <p>
                Tasks to do: <strong>{undoneTasks.length}</strong>
            </p>
        </header>
    );
};

export default TasksHeader;
