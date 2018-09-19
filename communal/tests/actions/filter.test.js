import moment from 'moment';

import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, 
    SET_END_DATE } from '../../src/types';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, 
    setEndDate } from '../../src/actions/filter';

test('should generate text filter result.', () => {
    const text = 'any_text';
    const set_textFilter = setTextFilter(text);
    expect(set_textFilter).toEqual({
        type: SET_TEXT_FILTER,
        text
    });
});

test('should generate text filter result with default value.', () => {
    const set_textFilter = setTextFilter();
    expect(set_textFilter).toEqual({
        type: SET_TEXT_FILTER,
        text: ''
    });
});


test('should sort by amount.', () => {
    const sb_Amount = sortByAmount();
    expect(sb_Amount).toEqual({
        type: SORT_BY_AMOUNT
    });
});

test('should sort by date.', () => {
    const sb_Date = sortByDate();
    expect(sb_Date).toEqual({
        type: SORT_BY_DATE
    });
});

test('should set start date.', () => {
    const set_startdate = setStartDate(moment(0));
    expect(set_startdate).toEqual({
        type: SET_START_DATE,
        startDate: moment(0)
    });
});

test('should set end date.', () => {
    const set_enddate = setEndDate(moment(0));
    expect(set_enddate).toEqual({
        type: SET_END_DATE,
        endDate: moment(0)
    });
});
