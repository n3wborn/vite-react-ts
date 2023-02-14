import TaskItem from './TaskItem'

const TasksList = ({tasks}) => {

    return (
        <>
            {tasks.map((t) => (
                <TaskItem
                    task={t}
                    key={t.id}
                />
            ))}
        </>
    )
}

export default TasksList
