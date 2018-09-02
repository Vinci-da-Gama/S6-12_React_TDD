import React, { Component } from 'react';

class PageTitleCompo extends Component {
	render() {
		return (
			<div className="row px-0 py-2 mx-3 mb-4 border-bottom border-dark">
				<div className="col-12 col-md-3 col-lg-6 emp-title pl-0 mb-md-0 mb-sm-3 mb-3">
					<h3 className="text-capitalize">
						{`${this.props.pathName}` ? this.props.pathName : 'Introduction'}
					</h3>
				</div>
			</div>
		);
	}
}

export default PageTitleCompo;
