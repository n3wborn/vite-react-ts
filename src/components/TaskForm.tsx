import {ChangeEvent, FormEventHandler, useState} from "react"

const TaskForm = () => {
    // keep track of inserted text
    const [text, setText] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        text.length !== 0 && console.log(`submit ${text}`)

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
