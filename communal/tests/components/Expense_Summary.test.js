import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../src/components/livingExpense/Expense_Summary';
import fixtureSummary from '../fixtures/summary.fixture';

let w1;

beforeEach(() => {
    w1 = shallow(<ExpensesSummary expenseCount={fixtureSummary[0]} expensesTotal={fixtureSummary[0]} />);
});

test('should render expense summary with single expense.', () => {
    expect(w1).toMatchSnapshot();
});

test('should render expense summary with multiple expenses.', () => {
    const w2 = shallow(<ExpensesSummary expenseCount={fixtureSummary[1]} expensesTotal={fixtureSummary[1]} />);
    expect(w2).toMatchSnapshot();
});