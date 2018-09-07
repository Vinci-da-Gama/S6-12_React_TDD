import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { ListGroup, ListGroupItem, Badge, Label } from 'reactstrap';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem className="justify-content-between">
                    <Link to={`/edit/${id}`}>
                        <h3>{description}</h3>
                    </Link>
                    <i>Date: </i>{moment(createdAt).format('MMMM Do, YYYY')}
                    <Badge pill>
                        <Label>Amount: </Label>
                        {numeral(amount / 100).format('$0,0.00')}
                    </Badge>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default ExpenseListItem;
