



//Expense Reducer
const expenseReducerDefaultState = [];
export default (state= expenseReducerDefaultState, action) => {
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
