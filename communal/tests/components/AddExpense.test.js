import React from 'react';
import {shallow} from 'enzyme';

import { AddExpense } from '../../src/components/livingExpense/AddExpense';
import fixtureExpense from '../fixtures/expenses.fixture';

let addExpenseSpy, history, wrapper, match;

beforeEach(() => {
    addExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    match = { url: '/create' };
    wrapper = shallow(<AddExpense addExpense={addExpenseSpy} history={history} match={match} />);
});

test('should render AddExpense page correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should submit new expense.', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(fixtureExpense[1]);
    expect(addExpenseSpy).toHaveBeenLastCalledWith(fixtureExpense[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
