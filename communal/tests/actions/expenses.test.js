import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../../src/types';
import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';

test('should setup remove expense action object.', () => {
    const remove_Action = removeExpense({ id: '123abc' });
    expect(remove_Action).toEqual({
        type: REMOVE_EXPENSE,
        id: '123abc'
    });
});

test('should setup edit expense action object.', () => {
    const edit_Action = editExpense('abc123', { note: 'new note...' });
    expect(edit_Action).toEqual({
        type: EDIT_EXPENSE,
        id: 'abc123',
        updates: { note: 'new note...' }
    });
});

test('should setup add expense action object with provided value', () => {
    const addExpObj = {
        description: 'Rent',
        note: 'This is note.',
        amount: 100,
        createdAt: 100000
    };
    const add_Action = addExpense(addExpObj);
    expect(add_Action).toEqual({
        type: ADD_EXPENSE,
        expense: {
            ...addExpObj,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default value', () => {
    const add_Action = addExpense();
    expect(add_Action).toEqual({
        type: ADD_EXPENSE,
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

