import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, FormGroup, Label, Input, FormText } from 'reactstrap';

import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filter';

export class ExpenseListFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        };
    }

    onDatesChange({ startDate, endDate }) {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange(calendarFocused) {
        this.setState(() => ({ calendarFocused }));
    }
    onTextChange(e) {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange(e) {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }
    
    render() {
        return (
            <div className="row mx-3">

                <Col sm={6} md={4}>
                    <FormGroup>
                        <Label for="lf_textfilterId">Text_Filter</Label>
                        <Input type="text" name="lf_textfilter" id="lf_textfilterId"
                            className="rounded-0" placeholder="Input Text For filtering..."
                            value={this.props.setValViaFilters.text} onChange={(event) => this.onTextChange(event)} />
                    </FormGroup>
                </Col>
                <Col sm={6} md={4}>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Changed_By</Label>
                        <Input type="select" name="lf_sortbydateOramount" id="lf_sortbydateOramountId" className="rounded-0 select-rightcorner"
                            value={this.props.setValViaFilters.sortBy}
                            onChange={(event) => { this.onSortChange(event) }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col sm={6} md={4}>
                    <Label>
                        StartDate -- EndDate
                    </Label>
                    <DateRangePicker startDateId="DpStartDate" endDateId="DpEndDate"
                        startDate={this.props.setValViaFilters.startDate}
                        endDate={this.props.setValViaFilters.endDate}
                        onDatesChange={({ startDate, endDate }) => { this.onDatesChange({ startDate, endDate }) }}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={(focusedInput) => {this.onFocusChange(focusedInput)}}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={ () => false } />
                    <FormText color="secondary">
                        Select Date Range for expense.
                    </FormText>
                </Col>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    setValViaFilters: state.setValViaFilters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (txt) => dispatch(setTextFilter(txt)),
    sortByDate: () => (dispatch(sortByDate())),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => (dispatch(setEndDate(endDate)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
