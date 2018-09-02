import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap';

import InDecisionHeader from '../../components/indecision/Header';
import RandomPickupDecision from '../../components/indecision/PickupAction';
import ShowOptions from '../../components/indecision/ShowOptions';
import AddOpt from '../../components/indecision/AddOpt';

class InDecisionCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = sessionStorage.getItem('options');
            const options = JSON.parse(json);
        
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
        // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            sessionStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    randomPickupDecision() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const targetOpt = this.state.options[randomNum];
        alert(targetOpt);
    }
    
    rmCurentOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    onRemoveAll() {
        this.setState(() => ( {options:[]} ));
        this.render();
    }

    handleAddOption(opt) {
        if (!opt) {
            return 'Please input option.';
        } else if (this.state.options.indexOf(opt) > -1) {
            return 'This option is already existed.';
        }
        this.setState((preState) => ({
            options: [...preState.options, opt]
        }));
    }

    render () {
        const subTitle = 'Collect life todo list here.';

        return (
            <div className="row mx-3">
                <div className="col-12 col-sm-12 col-md-6 offset-md-3">
                    <Card className="mt-3">
                        <CardHeader>
                            Decision (Todo List)
                        </CardHeader>
                        <CardBody>
                            <InDecisionHeader subtitle={subTitle} />
                            <RandomPickupDecision optLen={this.state.options.length} rPickupDecision={() => this.randomPickupDecision()} />
                            <ShowOptions opts={this.state.options}
                                removeAll={() => {this.onRemoveAll()}} rmCurrOpt={(optStr) => this.rmCurentOption(optStr)} />
                            <AddOpt handleAddOption={(optText) => {this.handleAddOption(optText)}} />
                        </CardBody>
                        <CardFooter>InDecision Footer</CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
}

export default InDecisionCompo;