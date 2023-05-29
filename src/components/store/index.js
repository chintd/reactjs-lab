import {createSlice, configureStore} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {isLogin: false},
    reducers:{
        login: (state)=>{
            state.isLogin = true
        },
        logout: (state)=>{
            state.isLogin = false
        }
    }
})
export const authActions = authSlice.actions;

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter : 0, showCounter : true},
    reducers:{
        increment: (state)=>{
            state.counter++
        },
        decrement :(state)=>{
            state.counter--
        },
        increase:(state,action)=>{
            state.counter = state.counter + action.payload
        },
        toggle:(state)=>{
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions;
const store = configureStore({
    reducer:{auth: authSlice.reducer,
    counter: counterSlice.reducer}
})
export default store