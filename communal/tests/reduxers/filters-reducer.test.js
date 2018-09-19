import moment from 'moment';

import fReducders from '../../src/reduxers/filter-reducer';
import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../../src/types';

test('should setup default filter values.', () => {
    // must use undefined here.
    const stateRz = fReducders(undefined, { type: '@@INIT' });
    expect(stateRz).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should sortby amount.', () => {
    const stateRz = fReducders(undefined, { type: SORT_BY_AMOUNT });
    expect(stateRz.sortBy).toBe('amount');
});

test('should sortby date.', () => {
    const stateRz = fReducders(undefined, { type: SORT_BY_DATE });
    expect(stateRz.sortBy).toBe('date');
});

test('should change to sortby amount.', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const stateRz = fReducders(currentState, { type: SORT_BY_AMOUNT });
    expect(stateRz.sortBy).toBe('amount');
});

test('should chenge to sortby date.', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const stateRz = fReducders(currentState, { type: SORT_BY_DATE });
    expect(stateRz.sortBy).toBe('date');
});

test('should set start date.', () => {
    const startDate = moment();
    const action = {
        type: SET_START_DATE,
        startDate
    };
    const stateRz = fReducders(undefined, action);
    expect(stateRz.startDate).toEqual(startDate);
});

test('should set end date.', () => {
    const endDate = moment();
    const action = {
        type: SET_END_DATE,
        endDate
    };
    const stateRz = fReducders(undefined, action);
    expect(stateRz.endDate).toBe(endDate);
});

