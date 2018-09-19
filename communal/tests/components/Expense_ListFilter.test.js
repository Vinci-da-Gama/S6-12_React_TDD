import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilter } from '../../src/components/livingExpense/Expense_ListFilter';
import { defaultFiltersConditions, filtersWithData } from '../fixtures/expense-filters.fixture';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilter 
        setValViaFilters={defaultFiltersConditions}
        setTextFilter = {setTextFilterSpy}
        sortByDate = {sortByDateSpy}
        sortByAmount = {sortByAmountSpy}
        setStartDate = {setStartDateSpy}
        setEndDate = {setEndDateSpy}
    />);
});

describe('Test snapshot with default filters condition and filters has data.', () => {
    test('should render expense list filter correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should render expense list filters with data correctly.', () => {
        wrapper.setProps({
            setValViaFilters: filtersWithData
        });
        expect(wrapper).toMatchSnapshot();
    });
});

test('should handle set text filter.', () => {
    const value = 'rent';
    wrapper.find('#lf_textfilterId').simulate('change', {
        target: { value }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('should filter by sort by date.', () => {
    const value = 'date';
    wrapper.find('#lf_sortbydateOramountId').simulate('change', {
        target: { value }
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should filter by sort by amount.', () => {
    const value = 'amount';
    wrapper.find('#lf_sortbydateOramountId').simulate('change', {
        target: { value }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changed.', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('[startDateId="DpStartDate"]').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus changed.', () => {
    const calendarFocused = 'endDate';
    wrapper.find('[startDateId="DpStartDate"]').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
