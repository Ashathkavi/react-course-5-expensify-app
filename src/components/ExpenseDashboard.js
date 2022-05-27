

import React from 'react';
import ExpenseList from '../components/ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';

 const ExpenseDashoardPage = () => (
    <main>
        <ExpenseListFilters/>
        <ExpenseList/>
    </main>
)

export default ExpenseDashoardPage
