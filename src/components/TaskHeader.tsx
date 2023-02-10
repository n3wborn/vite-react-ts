import {Check, Loader} from 'react-feather'
import {useSelector} from 'react-redux'

import {RootState} from '../store'
import {useGetUserTodosByUserIdQuery} from '../services/todos'

const TasksHeader = () => {
    const tasks = useSelector((state: RootState) => state.todo)
    const {data, error, isLoading} = useGetUserTodosByUserIdQuery(5)
    let localUndoneTasks = []
    let distantUndoneTasks = []

    tasks
        ? localUndoneTasks = tasks.filter((t) => t.completed === false)
        : null

    data
        ? distantUndoneTasks = data.filter((t) => t.completed === false)
        : null

    return (
        <>
            <header>
                <h1>React - Redux Toolkit / Todo List</h1>

                {/*loop over distant tasks*/}
                {
                    localUndoneTasks.length > 0
                        ? (
                            <>
                                <p>
                                    Local tasks to do: <strong>{localUndoneTasks.length}</strong>
                                </p>
                            </>
                        )
                        : (
                            <>
                                <p>Tasks done ! Nice job <Check color='green'/></p>
                            </>
                        )
                }

                {/*loop over distant tasks*/}
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <><Loader size='25' color='#97a2aa'/></>
                ) : data ?
                    (
                        <>
                            <p>
                                Online tasks to do: <strong>{distantUndoneTasks.length}</strong>
                            </p>
                        </>
                    ) : null
                }
            </header>
        </>
    )
}

export default TasksHeader
