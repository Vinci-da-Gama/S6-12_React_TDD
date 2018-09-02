import React from 'react';
const { Component } = React;

class HomeCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: {
                name: 'haha-name',
                age: 34,
                jobTitle: 'Full-Stack_Developer'
            }
        };
    }

    showJobTitle(jt) {
        if (typeof jt === 'string' && jt.length > 1) {
            return (
                <div className="col-12 col-sm-4 col-md-3">Job is: {jt}</div>
            );
        }
    }
    
    
	render() {
		return (
			<div className="row mx-3">
                {/* stage-2, bootstrap to scss, index provider, favicon, nested route, scroll to top change id, clear up */}
				<p className="col-12 col-sm-4 col-md-3">
                    { (this.state.condition.name.trim()) ? this.state.condition.name.trim() : 'Annoymous' }
                </p>
                { (this.state.condition.age && this.state.condition.age >= 18) && <p className="col-12 col-sm-4 col-md-3">Age: { this.state.condition.age }</p> }
                { this.showJobTitle(this.state.condition.jobTitle) }
			</div>
		);
	}
}

export default HomeCompo;
