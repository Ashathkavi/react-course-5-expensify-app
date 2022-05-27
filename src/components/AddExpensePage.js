



import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from '../components/ExpenseForm'
import {addExpense} from '../actions/expenses'
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
    let navigate = useNavigate();

    return (
    <div>
        This is from add expense copmponent
        <ExpenseForm
            onSubmit = {(expense) => {
                props.dispatch(addExpense(expense))
                navigate("/dashboard", { replace: true });
            }}
        />
    </div>
)}

export default connect()(AddExpensePage)