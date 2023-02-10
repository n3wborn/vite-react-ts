import {useSelector} from 'react-redux'
import {RootState} from '../store'
import TaskItem from './TaskItem'
import {useGetUserTodosByUserIdQuery} from '../services/todos'

const TasksList = () => {
    // local tasks
    const tasks = useSelector((state: RootState) => state.todo)
    const {data, error, isLoading} = useGetUserTodosByUserIdQuery(5)

    return (
        <>
            {/*map over local tasks*/}
            {
                (
                    tasks.map((t) => (
                        <TaskItem
                            task={t}
                            key={t.id}
                        />
                    ))

                )
            }

            {/*map over distant tasks*/}
            {error ? (
                <>Oh no, there was an error while tryinf to fetch online tasks</>
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
