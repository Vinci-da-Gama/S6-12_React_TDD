import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import ExpenseForm from '../../src/components/livingExpense/Expense_Form';
import fixtureExpenses from '../fixtures/expenses.fixture';

let wrapper, addUrl = '/create', amountInput, singleDatePicker;

beforeEach(() => {
    wrapper = shallow(<ExpenseForm currentUrl={addUrl} />);
    amountInput = wrapper.find('input').at(1);
    singleDatePicker = wrapper.find('#sd-pIcker');
});

test('should render expense form correctly.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form correctly with one expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={fixtureExpenses[1]} currentUrl={addUrl} />);
    expect(wrapper).toMatchSnapshot();
});

test('should set new description.', () => {
    const value = 'This is new description.';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set new amount.', () => {
    const value = '10.00';
    amountInput.simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set new amount, due to invalid value', () => {
    const value = '10.000';
    amountInput.simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should set new date onDateChange.', () => {
    const now = moment();
    singleDatePicker.prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focus when onFocusChange.', () => {
    const focused = true;
    singleDatePicker.prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});

test('should set new note.', () => {
    const value = 'This is new note.';
    wrapper.find('textarea[name="ef_note"]').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

describe('Test form submit.', () => {

    test('should render error message for invaild form submission.', () => {
        wrapper.find('form[name="expenseForm"]').simulate('submit', {
            preventDefault: () => {}
        });
        expect(wrapper.state('error').length).toBeGreaterThan(0);
        expect(wrapper.state('error')).toBe('Please provide description and amount.');
        expect(wrapper).toMatchSnapshot();
    });

    test('should submit form successfully.', () => {
        const onSubmitSpy = jest.fn();
        const e0 = fixtureExpenses[0];
        const formWrapper = shallow(<ExpenseForm expense={e0} currentUrl={addUrl} onSubmit={onSubmitSpy} />);
        formWrapper.find('form[name="expenseForm"]').simulate('submit', {
            preventDefault: () => {}
        });
        expect(formWrapper.state('error')).toBe('');
        expect(onSubmitSpy).toHaveBeenLastCalledWith({
          description: e0.description,
          amount: e0.amount,
          note: e0.note,
          createdAt: e0.createdAt
        });
    });

});
