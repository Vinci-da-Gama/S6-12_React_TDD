import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../src/components/livingExpense/Expense_ListItem';
import fixtureExpenses from '../fixtures/expenses.fixture';

test('should render dashboard correctly.', () => {
    const wrapper = shallow(<ExpenseListItem {...fixtureExpenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
