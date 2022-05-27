
import {connect} from 'react-redux'
import React from 'react';
import {
    useParams,
    useNavigate
  } from "react-router-dom";
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = (props) => {
    
    let navigate = useNavigate();
    return (
    <div>
        <ExpenseForm
        expense = {props.expense}
            onSubmit = {(expense) => {
                props.dispatch(editExpense(props.expense.id, expense))
                navigate("/dashboard", { replace: true });
            }}
        />
        
        <button onClick={(e) => {
            props.dispatch(removeExpense({id:props.expense.id}))
            navigate("/dashboard", { replace: true });
        }}>Remove</button>
    </div>
)}

const mapStateToProps = () => {
    let params = useParams();
    return (state, props) => {
        return {
            expense: state.expenses.find((expense) => expense.id === params.id)
        }
    }
}

export default connect(mapStateToProps)(EditExpensePage)