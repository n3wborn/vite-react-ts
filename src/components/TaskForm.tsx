import {ChangeEvent, FormEventHandler, useState} from "react"
import {useAddPostMutation} from "../features/api/todos"
import {Task} from "./TaskItem"

const TaskForm = () => {
    // keep track of inserted text
    const [text, setText] = useState('')
    const [addTask] = useAddPostMutation()

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const task: Task = {
            completed: false,
            title: text,
            // @todo: get "real" userID once a real backend
            userId: 5
        }

        text.length !== 0 && addTask({task})

        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add a task'
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
        </form>
    )
}

export default TaskForm
