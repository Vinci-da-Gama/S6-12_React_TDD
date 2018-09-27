import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeDashboardCompo from '../containers/pages/expeDashboard';
import AddExpense from '../components/livingExpense/AddExpense';
import expeEdit from '../components/livingExpense/editExpense';
import expeHelp from '../components/livingExpense/help';
import InebriantCompo from '../containers/pages/inebriant';
import HealthProductsCompo from '../containers/pages/health-products';
import CosmeticHlDelegateCompo from '../containers/pages/cosmetic_highLevelCompoDelegate';
import NestedDecisionCounter from '../containers/pages/nestedDecisionCounter';
import NestedBooksByParamsCompo from '../containers/pages/nestedByParams';
import NoFoundCompo from '../components/NoFound';

const RootRoute = () => (
	<Switch>
		<Route path="/" component={HomeDashboardCompo} exact={true} />
		<Route path="/create" component={AddExpense} />
		<Route path="/edit/:id" component={expeEdit} />
		<Route path="/help" component={expeHelp} />
		<Route path="/inebriant" component={InebriantCompo} />
		<Route path="/health" component={HealthProductsCompo} />
		<Route path="/cosmetic_hlDegate" component={CosmeticHlDelegateCompo} />
		<Route
			path="/nestedInDecisionNCounter"
			component={NestedDecisionCounter}
		/>
		<Route
			path="/nestedBooksByParams"
			component={NestedBooksByParamsCompo}
		/>
		<Route component={NoFoundCompo} />
	</Switch>
);

export default RootRoute;
