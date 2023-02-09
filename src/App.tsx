import {
    TasksHeader,
    TaskForm,
    TasksList,
} from './components'

export default function App() {

    return (
        <div className="container">
            <article>
                <TasksHeader />
                <TasksList/>
                <footer>
                    <TaskForm/>
                </footer>
            </article>
        </div>
    );
}
