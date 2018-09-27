import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LiCompo extends Component {
    render() {
        const { match, item } = this.props;
        return (
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active"
                    to={`${match.url}/${item.id}`}>
                    { item.name }
                </NavLink>
            </li>
        );
    }
}

export default LiCompo;
