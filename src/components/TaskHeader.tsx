const TasksHeader = ({tasks}) => {
    const incompleteTasks = tasks.filter((t) => t.completed === false)

    return (
        <>
            <header>
                <h1>React - Redux Toolkit / Todo List</h1>
                tasks
                ?
                (
                <>
                    <p>
                        Tasks to do: <strong>{incompleteTasks.length}</strong>
                    </p>
                </>
                )
                : null
            </header>
        </>
    )
}

export default TasksHeader
