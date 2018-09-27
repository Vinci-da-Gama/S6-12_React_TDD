import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import selectExpenses from '../../helpers/data-handler/expense-filterNsort';
import ExpenseListItem from './Expense_ListItem';

export const ExpenseListCompo = (props) => (
    <div>
        {
            (props.expenses.length === 0 || !props.expenses) ? (
                <Alert color="danger">
                    No expense item list.
                </Alert>
            ) : (
                props.expenses.map((expense, idx) => {
                    return <ExpenseListItem key={ expense.id + idx } {...expense} />;
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.setValViaFilters)
    };
};

/* const mapDispatchToProps = {
} */

export default connect(mapStateToProps, null)(ExpenseListCompo);
