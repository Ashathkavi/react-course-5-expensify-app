import filtersReducer from '../../reducers/filters'
import moment from 'moment'


test('Shouulld setup defult filter value', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Shouulld set dortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})






test('should set text fiilter', () => {
    const text = 'This is my filter'
    const action = {type: 'SET_TEXT_FILTER', text:text}
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('should set startdate filter', () => {
    const startDate = moment();
    const action = {type: 'SET_START_DATE', startDate}
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should set enddate filter', () => {
    const endDate = moment()
    const action = {type: 'SET_END_DATE', endDate}
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})