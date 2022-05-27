import {addExpense, removeExpense,editExpense} from '../../actions/expenses'


test('Shouulld setup remove expense action', () => {
    const action = removeExpense({id: '1213a'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'1213a'
    })
})



test('Shouulld setup edit expense action', () => {
    const action = editExpense('1213a', {note: 'New note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'1213a',
        updates: {
            note:'New note value'
        }
    })
})



test('Shouulld setup add expense action object with provoide value', () => {
    const expenseData = {
        description:'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Shouulld setup add expense action object without provoide value', () => {
    const expenseData = {
        description:'',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    })
})