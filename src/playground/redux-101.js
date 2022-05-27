import {createStore } from 'redux';


const incrementCount =({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount =({decrementBy = 1}={}) => ({
    type: 'DECREMENT',
    decrementBy
})


const resetCount =() => ({
    type: 'RESET'
})



const setCount =({count = 101}={}) => ({
    type: 'SET',
    count
})


const countReducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy 
            }
        case 'RESET':
            return {
                count: 0 
            }
        case 'SET':
            return {
                count: action.count 
            }
        default:
            return state;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})


store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})


store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch(incrementCount({incrementBy:8}))
store.dispatch(decrementCount({decrementBy:6}))
store.dispatch(decrementCount())

store.dispatch(resetCount())
store.dispatch(setCount({count:6}))

