import React, { Component } from 'react';
import ModalContainer from '../../containers/modal/modal';

class CardContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActivated: false,
			modalClass: 'modal-dialog rounded-0 modal-dialog-centered'
		};
	}

	render() {
		return (
			<div className={`card rounded-0 mb-4 border-dark ${this.state.isActivated
                ? 'activated' : ''}`}
				onClick={() => {
                    this.setState((prevState) => ({ isActivated: !prevState.isActivated }));
                    }}>
				<img className="card-img-top rounded-0" src={this.props.item.thumb}
					alt={this.props.item.thumb + this.props.item.id} />
				<div className="card-body">
					<h5 className="card-title text-truncate">
						{this.props.item.name}
					</h5>
					<p className={
						`card-text ${this.state.isActivated ? 'activated-excerpt-3lines' : 'excerpt-3lines'}`
					}>
						{this.props.item.description}
					</p>
				</div>
				<ModalContainer
					dialogClass={this.state.modalClass}
					itemDetails={this.props.item}
					isShowModal={this.state.isActivated}
					toggleModal={() => {
						this.setState((prevState) => ({ isActivated: !prevState.isActivated }));
					}} />
			</div>
		);
	}
}

export default CardContent;
