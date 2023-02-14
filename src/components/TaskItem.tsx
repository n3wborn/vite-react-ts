import {X} from "react-feather";

const TaskItem = ({task}) => {
    const handleOnChange = (id: number) => {
        console.log(`toggle "completed" task: ${id}`)
    }

    const handleOnClick = (id: number) => {
        console.log(`delete task: ${id}`)
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleOnChange(task.id)}
                />
                {task.title}

                <X
                    style={{color: "antiquewhite", padding: "6px", marginLeft: "20px"}}
                    strokeWidth="6"

                    onClick={() => handleOnClick(task.id)}
                    role="button"
                />
            </label>
        </>
    );
};

export default TaskItem;
