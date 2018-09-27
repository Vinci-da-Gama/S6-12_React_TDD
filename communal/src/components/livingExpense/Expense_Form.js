import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Button, Alert, Label, Badge, Col } from 'reactstrap';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            note: props.expense ? props.expense.note : '',
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

    render() {
        return (
            <div>
                { this.state.error && <Alert color="danger">{this.state.error}</Alert> }
                <form noValidate name="expenseForm"
                    onSubmit={ (event) => { this.onFormSubmit(event); } }>
                    <Col sm={6} md={4} className="mx-auto">
                        <Label className="bg-warning">
                            Description:&nbsp;
                        </Label>
                        <input type="text" name="ef_description"
                            placeholder="Description..." autoFocus
                            className="w-100 form-control rounded-0"
                            value={this.state.description}
                            onChange={ (event) => { this.onDescriptionChange(event); }} />
                    </Col>
                    <Col sm={6} md={4} className="mx-auto">
                        <Label className="bg-warning">
                            Amount:&nbsp;
                        </Label>
                        <input type="text" name="ef_Amount" placeholder="Amount..."
                            className="w-100 form-control rounded-0"
                            value={this.state.amount}
                            onChange={ (event) => { this.onAmountChange(event); } } />
                    </Col>
                    <Col sm={6} md={4} className="mx-auto">
                        <Badge color="warning" pill>
                            Create Date:&nbsp;
                        </Badge>
                        <br />
                        <SingleDatePicker
                            id="sd-pIcker"
                            date={ this.state.createdAt }
                            focused={ this.state.calendarFocused }
                            onDateChange={ (date) => { this.onDateChange(date); } }
                            onFocusChange={ (focused) => this.onFocusChange(focused) }
                            numberOfMonths={1} isOutsideRange={ () => false } />
                    </Col>
                    <Col sm={6} md={4} className="mx-auto">
                        <Label className="bg-warning">
                            Note:
                        </Label>
                        <br />
                        <textarea name="ef_note" rows="5"
                            placeholder="Add a note for your expense (optional)"
                            className="w-100"
                            value={this.state.note}
                            onChange={ (event) => this.onNoteChange(event) }></textarea>
                    </Col>
                    <Col sm={6} md={4} className="mx-auto">
                        <Button color="success" outline block>
                            { this.props.currentUrl.includes('/edit/')
                                ? 'Update_Expense' : 'Add_Expense' }
                        </Button>
                    </Col>
                </form>
            </div>
        );
    }
};

export default ExpenseForm;
