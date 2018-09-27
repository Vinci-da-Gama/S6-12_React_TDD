import React, { Component } from 'react';
import { ListGroupItem, Button } from 'reactstrap';

class OptDetails extends Component {
    render() {
        return (
            <ListGroupItem>
                {this.props.itemText}
                <Button color="warning" className="float-right"
                    onClick={(event) => { this.props.rmOpt(this.props.itemText); }}>
                    Remove This Option
                </Button>
            </ListGroupItem>
        );
    }
};

export default OptDetails;
