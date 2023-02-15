import {X} from "react-feather";

export type Task = {
    completed: boolean
    id: number
    title: string
    userId: number
}

const TaskItem = ({task}) => {

    const handleOnChange = (id: number) => {
        console.log(`toggle "completed" task: ${id}`)
    }

    const handleOnClick = (id: number) => {
        console.log(`delete task: ${id}`)
    }

    if (!task) return <div>Missing task!</div>

    return (
        <div>
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
        </div>
    )
};

export default TaskItem;
