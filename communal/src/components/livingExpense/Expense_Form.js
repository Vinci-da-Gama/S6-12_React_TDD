import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Button, Alert } from 'reactstrap';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange(e) {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange({ focused }) {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onNoteChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onFormSubmit(e) {
        e.preventDefault();
        const error = 'Please provide description and amount.';
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    
    render () {
        return (
            <div>
                { this.state.error && <Alert color="danger">{this.state.error}</Alert> }
                <form noValidate name="expenseForm" onSubmit={ (event) => { this.onFormSubmit(event) } }>
                    <input type="text" name="ef_description" placeholder="Description..." autoFocus
                        value={this.state.description} onChange={ (event) => { this.onDescriptionChange(event) }} />
                    <input type="text" name="ef_Amount" placeholder="Amount..."
                        value={this.state.amount} onChange={ (event) => { this.onAmountChange(event) } } />
                    <SingleDatePicker date={this.state.createdAt} focused={this.state.calendarFocused}
                        onDateChange={ this.onDateChange } onFocusChange={ this.onFocusChange }
                        numberOfMonths={1} isOutsideRange={ () => false } />
                    <textarea name="ef_note" rows="5"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={ (event) => this.onNoteChange(event) }></textarea>
                    <Button color="success" outline block>
                        Add_Expense
                    </Button>
                </form>
            </div>
        );
    }
};

export default ExpenseForm;