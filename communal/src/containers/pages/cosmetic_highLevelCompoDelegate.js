import React, { Component } from 'react';

import { AdminApplyDelegate } from '../../components/highLevelCompo_Delegate';

class CosmeticCompo extends Component {
	render() {
		return (
			<div>
                <AdminApplyDelegate
                    isAdmin={true}
                    info="when you see it, you are a real administrator."
                    />
                <hr />
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-4">
							wuha sdafdkkk
						</div>
						<div className="col-12 col-sm-4">
							casdf  asdfasdfasdf
						</div>
						<div className="col-12 col-sm-4">
							asdfasdfasdf
						</div>
					</div>
				</div>
				<div className="bgcgreen">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 col-sm-6">
								<div className="half-container">
									wocao...
								</div>
							</div>
							<div className="col-12 col-sm-6 bgc-img">
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CosmeticCompo;
