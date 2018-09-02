import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabInebriants } from '../../actions';
import { renderCards } from '../../helpers/render-cards';
import Spinner from '../../components/spinner';

class InebriantCompo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zero: 0
		};
	}

	componentWillMount() {
		this.props.grabInebriants();
	}

	render() {
		if (!this.props.inebriants || this.props.inebriants.length === this.state.zero) {
			return (
				<Spinner />
			);
		}
		return (
			<div className="row mx-3">
				{this.props.inebriants.map(renderCards)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return (
		{ inebriants: state.inebriants.inebriants }
	);
};

/* const mapDispatchToProps = (dispatch) => ({
    grabInebriants: () => {dispatch(grabInebriants())}
}); */


export default connect(mapStateToProps, { grabInebriants })(InebriantCompo);
