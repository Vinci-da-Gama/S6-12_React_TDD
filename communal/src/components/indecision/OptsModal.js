import React, { Component } from 'react';
import Rmodal from 'react-modal';
import { Button } from 'reactstrap';

class OptModal extends Component {
    render() {
        return (
            <Rmodal
                isOpen={!!this.props.selectedOpt}
                onRequestClose={ this.props.handleClearSelectedOpt }
                closeTimeoutMS={200}
                contentLabel="Selected Option Modal">
                <h3>
                    Selected Option
                </h3>
                { this.props.selectedOpt && <p className="text-success">
                    { this.props.selectedOpt }</p> }
                <Button color="info" className="float-right"
                    onClick={ this.props.handleClearSelectedOpt }>
                    Okay
                </Button>
            </Rmodal>
        );
    }
}

export default OptModal;
