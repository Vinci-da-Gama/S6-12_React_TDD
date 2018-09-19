import React from 'react';
import { shallow } from 'enzyme';

import fixtureExpenses from '../fixtures/expenses.fixture';
import { EditExpenseCompo } from '../../src/components/livingExpense/editExpense';

let editSpy, removeSpy, history, match, wrapper, e2;

beforeEach(() => {
    editSpy = jest.fn();
    removeSpy = jest.fn();
    history = {
        push: jest.fn()
    };
    // due to we set fixed id for fixtureExpense, we actually donot touch this match.
    // thus use jest.fn();
    e2 = fixtureExpenses[2];
    match = {
        url: `/edit/${e2.id}`
    };
    wrapper = shallow(<EditExpenseCompo editExpense={editSpy} removeExpense={removeSpy} history={history} match={match} expense={e2} />);
});

describe('Test Edit Expense.', () => {

    test('should render edit expense page correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should handle edit expense.', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(e2);
        expect(editSpy).toHaveBeenLastCalledWith(e2.id, e2);
        expect(history.push).toHaveBeenLastCalledWith('/');
    });
    
    test('should handle remove expense.', () => {
        wrapper.find('Button').simulate('click');
        expect(removeSpy).toHaveBeenLastCalledWith({id: e2.id});
        expect(history.push).toHaveBeenLastCalledWith('/');
    });

});