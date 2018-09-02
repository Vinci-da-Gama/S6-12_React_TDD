import React, { Component } from 'react';

export class Spinner extends Component {
	render() {
		return (
			<div className="loader-container">
				<div className="loader">
					Loading...
				</div>
			</div>
		);
	}
}

export default Spinner;
