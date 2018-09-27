import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './Expense_Form';
import { addExpense } from '../../actions/expenses';

export class AddExpense extends Component {
	onSubmit(expense) {
		this.props.addExpense(expense);
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<h2>Add Expense</h2>
				<hr />
				<ExpenseForm
					onSubmit={(expen = {}) => {
						this.onSubmit(expen);
					}}
					currentUrl={this.props.match.url}
				/>
			</div>
		);
	}
}

/* const mapStateToProps = (state) => ({
}); */

const mapDispatchToProps = dispatch => ({
	addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
	null,
	mapDispatchToProps
)(AddExpense);
