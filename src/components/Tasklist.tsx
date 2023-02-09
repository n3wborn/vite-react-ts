import {useSelector} from "react-redux";
import TaskItem from "./TaskItem";
import {RootState} from "../store";

const TasksList = () => {
    const tasks = useSelector((state: RootState) => state.todo)

    return (
        <>
            {tasks.map((t) => (
                <TaskItem
                    task={t}
                    key={t.id}
                />
            ))}
        </>
    );
};

export default TasksList;
