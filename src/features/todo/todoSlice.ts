import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // from ACTUAL State, return ACTUAL State + New Task
        addTask: (state, action) => {
            /*
             {type: "<SliceName>/<Reducer>", payload: "<Payload we will provide to reducer>"}
             {type: "todo/addTask", payload: "buy something"}
             */
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            };

            // we CAN mutate (immerJs does the mutable->immutable stuff himself)
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            // {type: "todo/toggleTask", payload: 2}
            const task = state.find(t => t.id === action.payload)
            task && (task.done = !task.done)
        },
        deleteTask: (state, action) => {
            // {type: "todo/deleteTask", payload: 2}
            // keep every task is their ID is not the one given in the payload
            const task = state.find(t => t.id === action.payload)
            state = state.filter(t => t.id !== action.payload)
        },
    }
})

// Action creators are generated for each case reducer function, in order !
export const { addTask, toggleTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer
