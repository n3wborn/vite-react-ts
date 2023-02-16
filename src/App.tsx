import {TaskForm, TasksList} from "./components"
import TasksHeader from "./components/TaskHeader"

const App = () => {
    return (
        <div className="container">
            <TasksHeader/>
            <article>
                <TasksList/>
            </article>
            <TaskForm/>
        </div>
    )
}

export default App
