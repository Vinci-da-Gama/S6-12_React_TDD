import React from 'react';
import { shallow } from 'enzyme';

/* To avoid store access error, in expenseList.js, also expoert const as component, Then in test file, 
only test the export const component. This is template test only, we test reducer test in other files. 
Otherwise, you have to connect state and reducer as one functional component in root index.js */
import { ExpenseListCompo } from '../../src/components/livingExpense/expenseList';
import fixtureExpenses from '../fixtures/expenses.fixture';

test('should render expense list component with fixtureExpenses correctly.', () => {
    const wrapper = shallow(<ExpenseListCompo expenses={fixtureExpenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty list array correctly.', () => {
    const wrapper = shallow(<ExpenseListCompo expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});

