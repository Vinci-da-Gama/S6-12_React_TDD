import React, { Component } from 'react';
import {
	Collapse, Navbar, NavbarToggler, NavbarBrand,
	Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
	DropdownMenu, DropdownItem
} from 'reactstrap';
// if u need activeClassName attr, thus import NavLink as RRNavLink.
import { NavLink as RRNavLink } from 'react-router-dom';

import brandImg from '../../img/brand.png';

class AppNavBarCompo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand to="/" activeClassName="active" tag={RRNavLink} exact>
					<img src={brandImg} className="brand-navbar" alt="brand..." />
					Show_Case
				</NavbarBrand>
				<NavbarToggler onClick={() => this.toggle()} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink to="/" activeClassName="active" tag={RRNavLink} exact>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/inebriant" activeClassName="active" tag={RRNavLink}>
								Inebriant
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/health" activeClassName="active" tag={RRNavLink}>
								Health
							</NavLink>
						</NavItem>
                        {/* This is sample as dropdown link, in Route, those are simple route, not nested route */}
						{/* <UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Food
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<NavLink to="/pastry" activeClassName="active" tag={RRNavLink}>
										Pastry
									</NavLink>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<NavLink to="/dairy" activeClassName="active" tag={RRNavLink}>
										Dairy Products
									</NavLink>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<NavLink to="/fresh" activeClassName="active" tag={RRNavLink}>
										Fresh
									</NavLink>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown> */}
						<NavItem>
							<NavLink to="/cosmetic" activeClassName="active" tag={RRNavLink}>
								Cosmetic
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/crafts" activeClassName="active" tag={RRNavLink}>
								Crafts
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/nestedInDecisionNCounter" activeClassName="active" tag={RRNavLink}>
								InDecision_And_Counter
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/nestedBooksByParams" activeClassName="active" tag={RRNavLink}>
								Books_With_Params_Id
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default AppNavBarCompo;
