import {useGetUserTodosQuery} from "../features/api/todos";
import {TaskItem} from "./index";

const TasksList = () => {
    // fetch data from (arbitrary) user with userId = 5
    const { data = [], isLoading, isFetching, isError } = useGetUserTodosQuery(5, {
        pollingInterval: 10000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>isLoading ...</div>

    return (
        <div className={isFetching ? 'posts--disabled' : ''}>
            {data.map((task) => (
                <TaskItem
                    task={task}
                    key={task.id}
                />
            ))}
        </div>
    )
}

export default TasksList
