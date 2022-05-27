



import moment from 'moment'
import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from '../actions/filters'
import DatePicker from 'react-datepicker';


class ExpenseListFilters extends React.Component{
    
    state = {
        startDate:new Date(),
        endDate:null
    }
    onDateChange = (dates) => {
        console.log(dates)

        let [startDate, endDate] = dates;
        this.setState(() =>({startDate, endDate}))
        //const startDateVal = moment(startDate).valueOf()
        //const endDateVal =  moment(endDate).valueOf()
        this.props.dispatch(setStartDate( moment(startDate)))
        this.props.dispatch(setEndDate( moment(endDate)))
    }
    render(){
        return (
        <div>
            <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }}
            />
            <select
                value={this.props.filters.sortBy}
                onChange = {(e) => {
                    if (e.target.value === 'date'){
                        this.props.dispatch(sortByDate())
                    } else if(e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount())
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DatePicker
                selected={this.state.startDate}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.onDateChange}
                selectsRange
                inline                    
            />

            
        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
