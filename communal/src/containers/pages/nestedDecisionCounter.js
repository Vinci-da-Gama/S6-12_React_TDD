import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';

import InDecisionCompo from '../sub-pages/inDecision';
import CounterCompo from '../sub-pages/counter';

const NestedDecisionCounterCompo = ({ match }) => {
    return (
		<div className="row mx-3">
			<div className="col-12">
				<ul className="nav nav-tabs justify-content-center">
					<li className="nav-item">
						<NavLink
							to={`${match.url}/inDecision`}
							className="nav-link"
							activeClassName="active"
						>
							In_Decision_List
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to={`${match.url}/counter`}
							className="nav-link"
							activeClassName="active"
						>
							Counter
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="col-12">
				<Route
					path={`${match.path}/inDecision`}
					component={InDecisionCompo}
				/>
				{/* <Route path={`${match.path}/counter`}
                    render={() => { return ( <div>Counter</div> ); }} /> */}
				<Route
					path={`${match.path}/counter`}
					component={CounterCompo}
				/>
			</div>
		</div>
	);
};

export default NestedDecisionCounterCompo;
