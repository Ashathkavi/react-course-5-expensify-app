


import {createStore, combineReducers} from 'redux'
import {v4 as uuid} from 'uuid'


//ADD_EXPENSE action generator
const addExpense = (
    {
        description ='',
        note ='',
        amount =0,
        createdAt =0,

    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE action generator
const removeExpense = ({id } ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE action generator
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


//SET_TEXT_FILTER action generator
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


//SORT_BY_AMOUNT action generator
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//SORT_BY_DATE action generator
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})


//SET_START_DATE action generator
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

})

//SET_END_DATE action generator
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})




//Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state= expenseReducerDefaultState, action) => {
    switch (action.type) { 
        case 'ADD_EXPENSE':
            return   [...state,action.expense]
        case 'REMOVE_EXPENSE':
            const newState = state.filter((expense) => expense.id !== action.id)
            return  newState
        case 'EDIT_EXPENSE':
            return  state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense
                }
            })
        default:
            return state;
    }
}

//Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state= filtersReducerDefaultState, action) => {
    switch (action.type) {    
        case 'SET_TEXT_FILTER':
            return   {...state, text:action.text}
            
        case 'SORT_BY_AMOUNT':
            return   {...state, sortBy:'amount'}
            
        case 'SORT_BY_DATE':
            return   {...state, sortBy:'date'}
        case 'SET_START_DATE':
            return   {...state, startDate:action.startDate}
        
        case 'SET_END_DATE':
            return   {...state, endDate:action.endDate}
        default:
            return state;
    }
}


//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch =typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());


        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
} 



//Creating Store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

//Store Subscription
store.subscribe(() => {
    //console.log(store.getState())
    //console.log({...filtersReducerDefaultState})
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


//Action Calling
const expenseOne = store.dispatch(addExpense({description :'rent',amount :5500, createdAt: -2100}))
const expenseTwo = store.dispatch(addExpense({description :'food',amount :4500, createdAt: -1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// store.dispatch(editExpense( expenseTwo.expense.id,{amount :6000}))

// store.dispatch(setTextFilter('ren'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))




const demoState = {
    expenses: [{
        id: 'asdasdas',
        description: 'January rent',
        note: 'This was the final paymwnt for that address',
        amount:5252525,
        createdAt: 0
    }],
    filters : {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}