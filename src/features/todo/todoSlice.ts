import {createSlice} from '@reduxjs/toolkit'

export type Task = {
    completed: boolean
    id: number
    title: string
    userId: number
}

type InitialStateType = Task[]

const initialState: InitialStateType = [
    {
        completed: false,
        id: Date.now(),
        title: 'intial state fake task',
        userId: 5
    },
    {
        completed: true,
        id: Date.now() + 1,
        title: 'another intial state fake task',
        userId: 5
    }
]

const todoSlice = createSlice({
    name: 'todo',
    // local state
    initialState,
    reducers: {
        // from ACTUAL State, return ACTUAL State + New Task
        addTask: (state, action) => {
            /* {type: "<SliceName>/<Reducer>", payload: "<Payload we will provide to reducer>"} */
            const newTask: Task = {
                completed: false,
                id: Date.now(),
                title: action.payload,
                userId: 1
            };

            // we CAN mutate (immerJs does the mutable->immutable stuff himself)
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            // {type: "todo/toggleTask", payload: 2}
            const task = state.find(t => t.id === action.payload)
            task && (task.completed = !task.completed)
        },
        deleteTask: (state, action) => {
            // {type: "todo/deleteTask", payload: 2}
            // Delete task (whose id is given in payload) from the state
            return state.filter(t => t.id !== action.payload)
        },
    }
})

// Action creators are generated for each case reducer function, in order !
export const { addTask, toggleTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer
