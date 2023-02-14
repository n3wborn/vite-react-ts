import {Loader} from 'react-feather'
import {useGetUserTodosByUserIdQuery} from '../services/todos'

const TasksHeader = () => {
    const {data, error, isLoading} = useGetUserTodosByUserIdQuery(5)
    let tasksUndone = []

    data
        ? tasksUndone = data.filter((t) => t.completed === false)
        : null

    return (
        <>
            <header>
                <h1>React - Redux Toolkit / Todo List</h1>

                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <><Loader size='25' color='#97a2aa'/></>
                ) : data ?
                    (
                        <>
                            <p>
                                Tasks to do: <strong>{tasksUndone.length}</strong>
                            </p>
                        </>
                    ) : null
                }
            </header>
        </>
    )
}

export default TasksHeader
