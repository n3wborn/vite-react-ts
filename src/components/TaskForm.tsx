import {ChangeEvent, FormEventHandler, useState} from "react"
import {useDispatch} from "react-redux"

import {addTask} from "../features/todo/todoSlice"
import {AppDispatch} from "../store";

const TaskForm = () => {
    const dispatch: AppDispatch = useDispatch()
    // keep track of inserted text
    const [text, setText] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        text.length !== 0 && dispatch(addTask(text))

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
    );
};

export default TaskForm;
