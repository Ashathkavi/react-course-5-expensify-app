
import selectExpense from '../../selectors/expenses'
import moment from 'moment'
import expenses  from '../fixtures/expenses'


test('Shouulld filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('Shouulld filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})



test('Shouulld filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})



test('Shouulld sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})




test('Shouulld sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpense(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})