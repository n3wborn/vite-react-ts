import TaskItem from './TaskItem'
import {useGetUserTodosByUserIdQuery} from '../services/todos'

const TasksList = () => {
    const {data, error, isLoading} = useGetUserTodosByUserIdQuery(5)

    return (
        <>
            {/*map over distant tasks*/}
            {error ? (
                <>Oh no, there was an error while trying to fetch online tasks</>
            ) : isLoading ? (

                <>Loading...</>
            ) : data ?
                (
                    <>
                        {data.map((t) => (
                            <TaskItem
                                task={t}
                                key={t.id}
                            />
                        ))}
                    </>
                ) : null
            }
        </>
    )
}

export default TasksList
