import React, { Component } from 'react';

import LiCompo from './li';

class UlCompo extends Component {
    render() {
        return (
            <ul className="nav nav-pills justify-content-center">
                {
                    this.props.collection.map((elem, idx) => {
                        return (
                            <LiCompo key={ idx } item={ elem } match={ this.props.match } />
                        );
                    })
                }
            </ul>
        );
    }
}

export default UlCompo;
