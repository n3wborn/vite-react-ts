import {TasksList} from "./components";

export default function App() {

    return (
        <div className="container">
            <article>
                {/*<TasksHeader tasks={} key={}/>*/}
                <TasksList />
                <footer>
                    {/*<TaskForm/>*/}
                </footer>
            </article>
        </div>
    );
}
