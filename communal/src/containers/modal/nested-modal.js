import React, { Component } from 'react';
import {
	Button, Modal, ModalHeader,
	ModalBody, ModalFooter
} from 'reactstrap';

import { GeneratesCheckboxes } from '../../helpers/generates-chks';

class NestedModalContainer extends Component {
	render() {
		return (
			<div>
				<Modal isOpen={this.props.isShowFirstModal}
					toggle={this.props.toggleFirstModal}
					className={this.props.dialogModalClasses}
					onClosed={() => {
                        console.log('!!!!!!~~~17: ', this.props.chkContext);
                        this.props.returnNewChksState(this.props.chkContext);
                    }}>
					<ModalHeader toggle={this.props.toggleFirstModal}>
						First_Modal
					</ModalHeader>
					<ModalBody>
						<GeneratesCheckboxes chksState={this.props.chkContext}
							handleSelect={(evt) => {
                                console.log('!!!!!26 -- ', evt);
								this.props.handleChkboxSelection(evt);
							}} />
						<br />
						<Button color="warning" onClick={this.props.toggleNestedModal}>
							Show_Nested_Modal
						</Button>
						<Modal isOpen={this.props.isShowNestedModal}
							toggle={this.props.toggleNestedModal}
							onClosed={this.props.isCloseAllModal ? this.props.toggleFirstModal : undefined}>
							<ModalHeader>
								Nested Title
							</ModalHeader>
							<ModalBody>Stuff and things</ModalBody>
							<ModalFooter>
								<Button color="primary"
									onClick={this.props.toggleNestedModal}>
									Done
								</Button>{' '}
								<Button color="secondary"
									onClick={this.props.closeAllModals}>
									All Done
								</Button>
							</ModalFooter>
						</Modal>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.props.toggleFirstModal}>
							Do Something
						</Button>{' '}
						<Button color="secondary" onClick={this.props.toggleFirstModal}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default NestedModalContainer;
