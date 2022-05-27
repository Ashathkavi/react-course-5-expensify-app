import moment from 'moment'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'


test('Shouulld generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})



test('Shouulld generate set end date acion object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})






test('Shouulld generate set text action object', () => {
    const text = "some thing"
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})



test('Shouulld generate set text filter acion object when text is empty', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })
})



test('Shouulld generate sort by date acion object when text is empty', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})


test('Shouulld generate sort by amount acion object when text is empty', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})