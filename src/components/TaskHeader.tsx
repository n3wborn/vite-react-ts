import {useGetUserTodosQuery} from "../features/api/todos";
import {Activity, Check} from "react-feather";

export const PostsCountStat = () => {
    const {data: tasks} = useGetUserTodosQuery(5)

    if (!tasks) return null

    const incompleteTasks = tasks.filter(t => !t.completed)

    if (incompleteTasks === 0) {
        return (
            <p><Check color="green"/> Tasks done. Nice Job !</p>
        )
    }

    return (
        <>
            <p>
                <Activity color='#c6282899'/> Tasks to do: <strong>{incompleteTasks.length}</strong>
            </p>
        </>
    )
}

const TasksHeader = () => {
    return (
        <>
            <header>
                <h1>React - Redux Toolkit / Todo List</h1>
                <PostsCountStat/>
            </header>
        </>
    )
}

export default TasksHeader
