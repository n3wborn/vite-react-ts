import {X} from "react-feather";
import {useDispatch} from "react-redux"

import {deleteTask, toggleTask} from "../features/todo/todoSlice"
import {AppDispatch} from "../store";

const TaskItem = ({task}) => {
    const dispatch: AppDispatch = useDispatch()

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                {task.title}

                <X
                    style={{color: "antiquewhite", padding: "6px", marginLeft: "20px"}}
                    strokeWidth="6"
                    onClick={() => dispatch(deleteTask(task.id))}
                    role="button"
                />
            </label>
        </div>
    );
};

export default TaskItem;
