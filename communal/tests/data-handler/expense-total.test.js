import getExpensesTotal from '../../src/helpers/data-handler/expense-total';
import fixtureExpenses from '../fixtures/expenses.fixture';

test('should return 0 if no expenses', () => {
    const emptyArr = new Array();
    const rz = getExpensesTotal(emptyArr);
    expect(rz).toBe(0);
});

test('should return single expense value', () => {
    const rz = getExpensesTotal([fixtureExpenses[0]]);
    expect(rz).toBe(195);
});

test('should return sum of all expenses', () => {
    const rz = getExpensesTotal(fixtureExpenses);
    expect(rz).toBe(114195);
});

