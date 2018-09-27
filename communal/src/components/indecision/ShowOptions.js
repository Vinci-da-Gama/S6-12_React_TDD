import React, { Component } from 'react';
import { ListGroup, Button, CardText } from 'reactstrap';

import OptDetails from './OptionDetails';

class ShowOptions extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.opts.length > 0
                        ? 'There are some item in you list.' : 'Please Add some decsions item.'}
                </p>
                { this.props.opts.length > 0 && <CardText>
                        Item Qty: {this.props.opts.length}</CardText> }
                <ListGroup className={`${this.props.opts.length > 0
                        ? 'mb-3 hover-darker ' : 'hidden'}` }>
                    {
                        this.props.opts.map((item, idx) => (
                            <OptDetails key={idx} itemText={item}
                                rmOpt={this.props.rmCurrOpt} />
                        ))
                    }
                </ListGroup>
                <Button outline block color="danger"
                    className="mb-3" onClick={this.props.removeAll}>
                    Remove_All
                </Button>
            </div>
        );
    }
};

export default ShowOptions;
