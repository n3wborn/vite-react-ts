import {createSlice} from "@reduxjs/toolkit";

type taskType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

type initialStateType = taskType[]
const initialState: initialStateType = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // from ACTUAL State, return ACTUAL State + New Task
        addTask: (state, action) => {
            /* {type: "<SliceName>/<Reducer>", payload: "<Payload we will provide to reducer>"} */

            const newTask: taskType = {
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
            // keep every task is their ID is not the one given in the payload
            const task = state.find(t => t.id === action.payload)
            return state.filter(t => t.id !== action.payload)
        },
    }
})

// Action creators are generated for each case reducer function, in order !
export const { addTask, toggleTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer
