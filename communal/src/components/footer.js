import React, { Component } from 'react';
import moment from 'moment';

class FooterCompo extends Component {
	render() {
		return (
			<footer className="footer font-small bg-light sticky-bottom mt-5">
				<div className="footer-copyright text-center py-3">
					&#169; {moment().format('YYYY')} Copyright:
					<a>Company_Name</a>
				</div>
			</footer>
		);
	}
}

export default FooterCompo;
