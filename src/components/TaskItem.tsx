import {useDispatch} from "react-redux"
import {deleteTask, toggleTask} from "../features/todo/todoSlice"

const TaskItem = ({task}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                {task.text}

                <span
                    onClick={() => dispatch(deleteTask(task.id))}
                    role="button"
                    style={{padding: "5px", marginLeft: "20px"}}
                >
                    X
                </span>
            </label>
        </div>
    );
};

export default TaskItem;
