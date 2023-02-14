import TaskItem from './TaskItem'

const TasksList = ({tasks}) => {

    return (
        <>
            data ?
            (
            <>
                {tasks.map((t) => (
                    <TaskItem
                        task={t}
                        key={t.id}
                    />
                ))}
            </>
            )
            : null
        </>
    )
}

export default TasksList
