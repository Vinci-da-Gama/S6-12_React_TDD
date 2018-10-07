import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class AddOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
    }

    onFormSubmit(e) {
        e.preventDefault();
        const newThing = e.target.elements.thingName.value.trim();
        const error = this.props.handleAddOption(newThing);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.thingName.value = '';
        }
        console.log('20 -- ', e);
    }

	render() {
		return (
            <Form inline noValidate name="InDecision-todolist-form"
                onSubmit={(event) => { this.onFormSubmit(event); }}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="New_tHing" className="mr-sm-2">New Thing:</Label>
                    <Input type="text" name="thingName" id="New_tHing" placeholder="sth todo" />
                </FormGroup>
                <Button color="warning" size="lg" block className="rounded-0 mt-2">
                    Add_Thing
                </Button>
            </Form>
        );
	}
};
