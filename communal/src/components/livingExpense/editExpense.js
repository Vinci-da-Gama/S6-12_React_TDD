import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardFooter, CardBody, Row, Col } from 'reactstrap';

import ExpenseForm from './Expense_Form';
import { editExpense, removeExpense } from '../../actions/expenses';

export class EditExpenseCompo extends Component {

    onSubmit(expense) {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove() {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <Row>
                <Card body inverse>
                    <CardHeader tag="h2" className="text-secondary">
                        Edit_Expense
                    </CardHeader>
                    <CardBody>
                        <ExpenseForm expense={this.props.expense}
                            onSubmit={(expense) => { this.onSubmit(expense); }}
                            currentUrl={this.props.match.url} />
                        <Col xs="12" sm="6" md="4"
                            className="offset-0 offset-sm-3 offset-md-4 my-3">
                            <Button color="danger" outline block
                                className="rounded-0" onClick={() => { this.onRemove(); }}>
                                Remove_Expense
                            </Button>
                        </Col>
                    </CardBody>
                    <CardFooter className="text-muted">Footer</CardFooter>
                </Card>
            </Row>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((currExpense) => currExpense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (targetIdObj) => dispatch(removeExpense(targetIdObj))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseCompo);
