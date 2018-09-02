import React, { Component } from 'react';
import Moment from 'react-moment';
import { Modal, ModalBody } from 'reactstrap';

export class ModalContainer extends Component {
	render() {
		return (
			<div onClick={this.props.toggleModal}>
				<Modal isOpen={this.props.isShowModal} toggle={this.props.toggleModal}
					className={this.props.dialogClass}>
					<div className="container border-bottom border-dark text-right pr-2">
						<button onClick={this.props.toggleModal} className="closesign border-0 px-0 pb-3">
							X
						</button>
					</div>
					<ModalBody>
						<div className="row">
							<div className="col-12 col-sm-4">
								<div>
									<img src={this.props.itemDetails.imgPath}
										className="img-fluid" alt={this.props.itemDetails.id} />
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item p-0 border-0">
										item: <span className="font-weight-bold">
											item...
										</span>
									</li>
									{/* <li className="list-group-item p-0 border-0">
										Age: <span className="font-weight-bold">{this.props.itemDetails.age}</span>
									</li>
									<li className="list-group-item p-0 border-0">
										DateJoined: <br/>
										<Moment format="YYYY/MM/DD" className="font-weight-bold">
											{this.props.itemDetails.dateJoined}
										</Moment>
									</li> */}
								</ul>
							</div>
							<div className="col-12 col-sm-8">
								<div className="modal-names w-75 pb-1 mb-2">
									{this.props.itemDetails.name}
								</div>
								{this.props.itemDetails.description}
							</div>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default ModalContainer;
