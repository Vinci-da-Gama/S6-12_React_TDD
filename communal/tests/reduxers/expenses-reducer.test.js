import fixtureExpenses from '../fixtures/expenses.fixture';
import exReducer from '../../src/reduxers/expense-reducer';
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../../src/types';

test('should return default value.', () => {
    const stateRz = exReducer(undefined, { type: '@@INIT' });
    expect(stateRz).toEqual([]);
});

test('should add new expense.', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    };
    const action = {
        type: ADD_EXPENSE,
        expense
    };
    const stateRz = exReducer(fixtureExpenses, action);
    expect(stateRz).toEqual([...fixtureExpenses, expense]);
});

test('should remove expense by id.', () => {
    const action = {
        type: REMOVE_EXPENSE,
        id: fixtureExpenses[1].id
    };
    const stateRz = exReducer(fixtureExpenses, action);
    expect(stateRz).toEqual([fixtureExpenses[0], fixtureExpenses[2]]);
});

test('should not remove expense, if no id.', () => {
    const action = {
        type: REMOVE_EXPENSE,
        id: -1
    };
    const stateRz = exReducer(fixtureExpenses, action);
    expect(stateRz).toEqual(fixtureExpenses);
});

test('should update expense by id.', () => {
    const amount = 122000;
    const action = {
        type: EDIT_EXPENSE,
        id: fixtureExpenses[1].id,
        updates: {
            amount
        }
    };
    const stateRz = exReducer(fixtureExpenses, action);
    expect(stateRz[1].amount).toEqual(122000);
});

test('should not update expense, if no id.', () => {
    const note = 'Not updated.';
    const action = {
        type: EDIT_EXPENSE,
        id: -1,
        updates: {
            note
        }
    };
    const stateRz = exReducer(fixtureExpenses, action);
    expect(stateRz).toEqual(fixtureExpenses);
});
