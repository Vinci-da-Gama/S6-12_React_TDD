import React from 'react';

import ExpenseSummary from '../../components/livingExpense/Expense_Summary';
import ExpenseListFilter from '../../components/livingExpense/Expense_ListFilter';
import ExpenseList from '../../components/livingExpense/expenseList';

const { Component } = React;

class LivingExpenseDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: {
                name: 'haha-name',
                age: 34,
                jobTitle: 'Full-Stack_Developer'
            }
        };
    }

    showJobTitle(jt) {
        if (typeof jt === 'string' && jt.length > 1) {
            return (
                <div className="col-12 col-sm-4 col-md-3">Job is: {jt}</div>
            );
        } else {
            return null;
        }
    }

	render() {
		return (
			<div className="container-fluid">
                <ExpenseSummary />
                <ExpenseListFilter />
                <ExpenseList />
                <div className="clearfix"></div>
                <div className="row mx-3">
                    {/* stage-2, bootstrap to scss, index provider,
                        favicon, nested route, scroll to top change id, clear up */}
                    <p className="col-12 col-sm-4 col-md-3">
                        { (this.state.condition.name.trim())
                            ? this.state.condition.name.trim() : 'Annoymous' }
                    </p>
                    { (this.state.condition.age && this.state.condition.age >= 18) && <p
                        className="col-12 col-sm-4 col-md-3">Age: { this.state.condition.age }</p> }
                    { this.showJobTitle(this.state.condition.jobTitle) }
                </div>
			</div>
		);
	}
}

export default LivingExpenseDashboard;
