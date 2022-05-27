
import React from 'react'
import ReactDOMClient from 'react-dom/client'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'

const store = configureStore();

store.dispatch(addExpense({description:'water bill', amount: 4500}))
store.dispatch(addExpense({description:'gas bill', createdAt:1000}))
store.dispatch(addExpense({description:'Rent', amount:100258}))
store.dispatch(setTextFilter(''))


//console.log(store.getState())
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container)
root.render(jsx)





