import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RandomPickupDecision extends Component {
    render() {
        return (
            <Button outline block color="secondary" className="rounded-0"
                disabled={this.props.optLen <= 0
                    ? true : false} onClick={this.props.rPickupDecision} >
                {this.props.btnName}
            </Button>
        );
    }
};

RandomPickupDecision.defaultProps = {
    btnName: 'What should I do?'
};

export default RandomPickupDecision;
