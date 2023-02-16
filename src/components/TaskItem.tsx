import {X} from "react-feather"
import {useDeleteTodoMutation, useToggleCompletedMutation} from "../features/api/todos"

export type Task = {
    completed: boolean
    id?: number
    title: string
    userId?: number
}

const TaskItem = ({task}) => {
    const [deleteTask, {isLoading: isDeleting}] = useDeleteTodoMutation()
    const [toggleTaskCompleted] = useToggleCompletedMutation()

    const handleDeleteTask = () => {
        deleteTask(task.id)
    }

    const handleChangeCompleted = () => {
        toggleTaskCompleted({id: task.id, completed: !task.completed})
    }

    if (!task) return <div>Missing task!</div>

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleChangeCompleted()}/>

                {task.title} - {task.id}

                <X
                    style={{color: "antiquewhite", padding: "6px", marginLeft: "20px"}}
                    strokeWidth="6"
                    onClick={() => handleDeleteTask()}
                    role="button"
                />

                {isDeleting ? 'Deleting...' : ''}
            </label>
        </div>
    )
};

export default TaskItem
