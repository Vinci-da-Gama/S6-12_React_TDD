import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeCompo from '../containers/pages/home';
import InebriantCompo from '../containers/pages/inebriant';
import HealthProductsCompo from '../containers/pages/health-products';
import CosmeticCompo from '../containers/pages/cosmetic';
import CraftsCompo from '../containers/pages/crafts';
import NestedDecisionCounter from '../containers/pages/nestedDecisionCounter';
import NestedBooksByParamsCompo from '../containers/pages/nestedByParams';
import NoFoundCompo from '../containers/pages/NoFound';

const RootRoute = () => (
	<Switch>
		<Route path='/' component={HomeCompo} exact={true} />
		<Route path='/inebriant' component={InebriantCompo} />
		<Route path='/health' component={HealthProductsCompo} />
		<Route path='/cosmetic' component={CosmeticCompo} />
		<Route path='/crafts' component={CraftsCompo} />
		<Route path='/nestedInDecisionNCounter' component={NestedDecisionCounter} />
        <Route path="/nestedBooksByParams" component={NestedBooksByParamsCompo} />
		<Route component={NoFoundCompo} />
	</Switch>
);

export default RootRoute;
