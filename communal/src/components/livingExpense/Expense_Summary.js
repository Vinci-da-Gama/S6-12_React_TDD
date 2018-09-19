import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../../helpers/data-handler/expense-filterNsort';
import selectExpensesTotal from '../../helpers/data-handler/expense-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="bg-success">
            Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.setValViaFilters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

/* const mapDispatchToProps = (dispatch) => {
}; */


export default connect(mapStateToProps, null)(ExpensesSummary);
