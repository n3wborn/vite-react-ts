import {useState} from "react"
import {useDispatch} from "react-redux"
import {addTask} from "../features/todo/todoSlice"

const TaskForm = () => {
    const dispatch = useDispatch()
    // keep track of inserted text
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addTask(text))
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add a task'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
};

export default TaskForm;
