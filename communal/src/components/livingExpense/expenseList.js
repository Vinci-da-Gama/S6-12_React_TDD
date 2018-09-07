import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'reactstrap';

import selectExpenses from '../../helpers/data-handler/expense-filterNsort';
import ExpenseListItem from './Expense_ListItem';

export class ExpenseListCompo extends Component {
    render() {
        if (this.props.expenses.length === 0 || !this.props.expenses) {
            return (
                <Alert color="danger">
                    No expense item list.
                </Alert>
            );
        }
        return (
            <div>
                {
                    this.props.expenses.map((expense, idx) => {
                        return <ExpenseListItem key={ expense.id+idx } {...expense} />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.setValViaFilters)
});

/* const mapDispatchToProps = { 
} */

export default connect(mapStateToProps, null)(ExpenseListCompo);
