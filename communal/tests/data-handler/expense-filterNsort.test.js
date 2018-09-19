import moment from 'moment';

import selectedNSortExpense from '../../src/helpers/data-handler/expense-filterNsort';
import fixtureExpenses from '../fixtures/expenses.fixture';

test('should filter by text filter', () => {
    const filterContext = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const rz = selectedNSortExpense(fixtureExpenses, filterContext);
    expect(rz).toEqual([fixtureExpenses[2], fixtureExpenses[1]]);
});

test('should filter by Start Date.', () => {
    const filterContext = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const rz = selectedNSortExpense(fixtureExpenses, filterContext);
    const expectedArr = [fixtureExpenses[2], fixtureExpenses[0]];
    expect(rz).toEqual(expectedArr);
});

test('should filter by End Date.', () => {
    const filterContext = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const rz = selectedNSortExpense(fixtureExpenses, filterContext);
    expect(rz).toEqual([fixtureExpenses[0], fixtureExpenses[1]]);
});

test('should filter by Start Date and End Date.', () => {
    const filterContext = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(0).add(1, 'days')
    };
    const rz = selectedNSortExpense(fixtureExpenses, filterContext);
    expect(rz).toEqual([fixtureExpenses[0]]);
});

test('should sorted by date.', () => {
    const filterContext = {
        text: '',
        sortBy: 'date',
        startDate: null,
        endDate: null
    };
    const rz = selectedNSortExpense(fixtureExpenses, filterContext);
    expect(rz).toEqual([fixtureExpenses[2], fixtureExpenses[0], fixtureExpenses[1]]);
});

test('should sorted by amount.', () => {
    const filterContext = {
        text: '',
        sortBy: 'amount',
        startDate: null,
        endDate: null
    };
    const rz = selectedNSortExpense(fixtureExpenses, filterContext);
    expect(rz).toEqual([fixtureExpenses[1], fixtureExpenses[2], fixtureExpenses[0]]);
});

