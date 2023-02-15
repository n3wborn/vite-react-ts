import {TasksList} from "./components";
import TasksHeader from "./components/TaskHeader";

export default function App() {

    return (
        <div className="container">
            <TasksHeader/>
            <article>
                <TasksList/>
            </article>
        </div>
    )
}
