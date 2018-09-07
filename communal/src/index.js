import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

import storeWithMiddleware from './store/store-config';
import RootApp from './components/index';

require('../style/index.scss');

const rootTmpl = (
    <Provider store={ storeWithMiddleware }>
		<Router>
			<RootApp />
		</Router>
	</Provider>
);
const Utensil = document.querySelector('.root-dom-container');

render(rootTmpl, Utensil);
