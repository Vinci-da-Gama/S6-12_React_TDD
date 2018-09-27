import React, { Component } from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';

import NestedModalContainer from '../modal/nested-modal';
import { GeneratesCheckboxes } from '../../helpers/generates-chks';
import { grabMissChildren, getObjForPropValue } from '../../actions';

class HealthProductsCompo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkboxes: {
				chbx0: '',
				chbx1: '',
				chbx2: '',
				chbx3: ''
			},
			ut: 'unit_test',
			firstModal: false,
			nestedModal: false,
			closeAll: false,
			modalClass: 'modal-dialog rounded-0 modal-dialog-centered'
		};
	}

	componentWillMount() {
		this.props.grabMissChildren();
		this.props.getObjForPropValue();
	}

	handleCheckboxSelection(e) {
		console.log('!!!!!32 -- ', e.target);
		const name = e.target.name;
		const relayObj = Object.keys(this.state.checkboxes).reduce(
			(tmpObj, currentItem) => {
				if (currentItem === name) {
					tmpObj[currentItem] = e.target.value === '' ? name : '';
				} else if (
					currentItem !== name && this.state.checkboxes[currentItem] !== ''
				) {
					tmpObj[currentItem] = this.state.checkboxes[currentItem];
				} else {
					tmpObj[currentItem] = '';
				}
				return tmpObj;
			},
			{}
		);
		console.log('47 -- relayObj: ', relayObj);
		this.setState({
			checkboxes: relayObj
		});
	}

	toggleFirstModal() {
		console.log('58 -- kai...');
		this.setState({
			firstModal: !this.state.firstModal
		});
	}

	toggleNestedModal() {
		console.log('60 -- 2kai...');
		this.setState({
			nestedModal: !this.state.nestedModal,
			closeAll: false
		});
	}

	closeAllModals() {
		console.log('69 -- 3kai...');
		this.setState({
			nestedModal: !this.state.nestedModal,
			closeAll: true
		});
	}

	getChksFromModal(chksFromModal) {
		console.log('!!!!!!77 -- ', chksFromModal);
		this.setState({
			checkboxes: chksFromModal
		});
		console.log('!!!!!!81 -- ', this.state.checkboxes);
	}

	calculate5To1() {
		// const arr = Array.from(Array(5).keys(), elem => elem+1).reverse();
		function recursion5To1(val) {
			if (val === 0) {
				return 1;
			}
			return val * recursion5To1(val - 1);
		}
		return recursion5To1(5);
	}

	findYoungestChildInArray() {
		const childrenArray = [
			{
				age: 2,
				name: 'name5',
				children: [
					{
						age: 3,
						name: 'name6',
						children: [{ age: 2, name: 'name33' }]
					},
					{
						age: 8,
						name: 'name7',
						children: [{ age: 1, name: 'name20' }]
					}
				]
			},
			{
				age: 6,
				name: 'name9',
				children: [
					{
						age: 2,
						name: 'name10',
						children: [{ age: 7, name: 'name19' }]
					},
					{
						age: 6,
						name: 'name11',
						children: [{ age: 1, name: 'name18' }]
					}
				]
			}
		];
		const tapala = { age: 2, name: 'name5' };
		// includes

		const rz = [];
		const findYoungestChild = arr => {
			for (let i = 0; i < arr.length; i++) {
				let tmp;
				// for (const key in arr[i]) {
				// 	if (arr[i].hasOwnProperty(key) && key === 'children') {
				// 		tmp = findYoungestChild(arr[i].children);
				// 	} else {
				// 		rz.push({
				// 			age: arr[i].age,
				// 			name: arr[i].name
				// 		});
				// 	}
				// }
				Object.keys(arr[i]).forEach(key => {
					if (key === 'children') {
						tmp = findYoungestChild(arr[i].children);
					} else {
						const someObj = {
							age: arr[i].age,
							name: arr[i].name
						};
						const tabu = rz.indexOf(someObj);
						if (rz.indexOf(someObj) === -1) {
							rz.push(someObj);
						}
					}
				});
			}
		};

		findYoungestChild(childrenArray);

		console.log('175 just get rz -- ', rz);

		const lo = rz.reduce((res, elem, idx, currArr) => {
			if (idx === 0) {
				return res;
			} else {
				const lElem = currArr[idx - 1];
				if (elem.age === lElem.age && elem.name === lElem.name) {
					return res;
				} else if (elem.age < lElem.age && elem.name !== lElem.name) {
					return [...res, elem];
				} else {
					return res;
				}
			}
		}, []);
		console.log('191 !! lo: ', lo);

		const kucao = [2, 1, 3, 1, 5].filter((elem, idx, arr) => {
			if (idx === 0) {
				return true;
			} else if (arr.indexOf(elem) === idx) {
				if (elem <= arr[idx - 1]) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		});

		console.log('!!! 207 --- ', kucao);

		const kala = Math.min.apply(Math, [2, 1, 3, 1, 5]);
		console.log('!!! 210 quick way to find min number --- ', kala);

		const dupObj = [
			{ id: 1, value: 'a' },
			{ id: 2, value: 'b' },
			{ id: 1, value: 'c' }
		];
		const uniKeys = [...new Set(dupObj.map(({ id }) => id))];
		console.log('214 !!! uniKeys: ', uniKeys);

		// it is for value array only, not for obj array.
		const loo = [...new Set(lo)];
		console.log(
			'229 ha -- set is applied, but nothing changed, it is only for value array',
			loo
		);

		lo.sort((a, b) => {
			// console.log('a is: ', a, 'b is: ', b);
			return a.age - b.age;
		});
		console.log('236 after sort rz is: -- ', lo);

		const theYoungest = lo.filter(({ age }, idx, currArr) => {
			// this is no good, although it works.
			if (idx === 0) {
				return true;
			} else if (
				idx < 2 && currArr[idx - 1] && age <= currArr[idx - 1].age
			) {
				return true;
			} else if (
				idx >= 2 && currArr[idx - 1] && age <= currArr[idx - 1].age && age <= currArr[idx - 2].age
			) {
				return true;
			} else {
				return false;
			}
		});
		console.log('247 -- ', theYoungest);
	}

	grabInsFrom2To9() {
		const range = function(startNum, endNum) {
			if (endNum - startNum === 2) {
				return [startNum + 1];
			} else {
				const list = range(startNum, endNum - 1);
				list.push(endNum - 1);
				return list;
			}
		};
		return range(2, 9);
	}

	sum1To6() {
		const recursivAdd = val => {
			if (val === 1) {
				return 1;
			}
			const nextAdd = recursivAdd(val - 1);
			// console.log('191 -- nextAdd: ', nextAdd, ' val: ', val);
			return val + nextAdd;
		};
		return recursivAdd(6);
	}

	exponentOneNum() {
		const exponseOneNumber = (num, exponent) => {
			if (exponent === 0) {
				return 1;
			} else {
				exponent = exponent - 1;
				const nextExponent = exponseOneNumber(num, exponent);
				return num * nextExponent;
			}
		};
		return exponseOneNumber(3, 2);
	}

	recursionObjIncludesHitN2ndDeepthChildren() {
		const origObj = this.props.missChildren;

		const resObj = origObj.filter(function f(eachObj) {
			if (eachObj.value.includes('Hit')) return true;

			if (eachObj.children) {
				return (eachObj.children = eachObj.children.filter(f)).length;
			}
			return {};
		});
		// console.log('241 -- : ', JSON.stringify(resObj, null, 2));
	}

	searchByIdInNestedObj() {
		const data = {
			item: [
				{
					itemNested: [
						{
							itemNested2: [{ id: '2', name: 'name0' }]
						}
					]
				}
			]
		};
		const targetIdVal = '2';
		function recursionSearchById(obj, idVal) {
			if (obj.id === idVal) {
				return obj;
			}
			let tElem = {};
			/* for (const key in obj) {
				if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
					tElem = recursionSearchById(obj[key], targetIdVal);
					if (tElem) {
						return tElem;
					}
				}
			} */
			Object.keys(obj).forEach(key => {
				if (typeof obj[key] === 'object') {
					tElem = recursionSearchById(obj[key], targetIdVal);
					if (tElem) {
						return tElem;
					}
				}
				return {};
			});
			return tElem;
		}
		console.log(
			'283 -- targetObj is: ',
			recursionSearchById(data, targetIdVal)
		);
	}

	getPropVal() {
		const propName = 'progress';
		function recursionGetPropVal(obj, pn) {
			let tpVal;
			Object.keys(obj).some(eachKey => {
				if (eachKey === pn) {
					tpVal = obj[eachKey];
					return true;
				}
				if (
					obj.hasOwnProperty(eachKey) && typeof obj[eachKey] === 'object'
				) {
					tpVal = recursionGetPropVal(obj[eachKey], pn);
					return tpVal !== 'undefined';
				}
				return {};
			});
			return tpVal;
		}
		return recursionGetPropVal(this.props.propValObj, propName);
	}

	getAllKeys() {
		const data = {
			check_id: 12345,
			check_name: 'Name of HTTP check',
			check_type: 'HTTP',
			tags: ['example_tag'],
			check_params: {
				basic_auth: false,
				params: ['size'],
				encryption: {
					enabled: true,
					testNull: null
				}
			}
		};
		const getallkeysAsArr = (obj, prefix = '') => {
			Object.keys(obj).reduce((res, el) => {
				// console.log('274 -- el: ', el);
				if (Array.isArray(obj[el])) {
					return res;
				} else if (typeof obj[el] === 'object' && obj[el] !== null) {
					return [
						...res,
						...getallkeysAsArr(obj[el], `${prefix}${el}.`)
					];
				} else {
					return [...res, prefix + el];
				}
			}, []);
			return getallkeysAsArr(data);
		};
	}

	findObjBySmallestId() {
		const treeDataSource = [
			{
				id: 1,
				Name: 'Test1',
				items: [
					{
						id: 2,
						Name: 'Test2',
						items: [
							{
								id: 3,
								Name: 'Test3'
							}
						]
					}
				]
			}
		];
		const idValue = 3;
		const recursionFindSmallestId = (data, idVal) => {
			if (data.id === idVal) {
				return {
					id: data.id,
					Name: data.Name
				};
			}
			let tObj;
			// for (const key in data) {
			// 	if (data.hasOwnProperty(key) && typeof data[key] === 'object') {
			// 		tObj = recursionFindSmallestId(data[key], idVal);
			// 		if (tObj.hasOwnProperty('id')) {
			// 			return tObj;
			// 		}
			// 	}
			// }
			Object.keys(data).forEach(keyElem => {
				if (typeof data[keyElem] === 'object') {
					tObj = recursionFindSmallestId(data[keyElem], idVal);
					if (tObj.hasOwnProperty('id')) {
						return tObj;
					}
				}
				return {};
			});
			return tObj;
		};
		return recursionFindSmallestId(treeDataSource, idValue).id;
	}

	render() {
		return (
			<div className="row mx-3">
				<div>
					1. multiple checkbox and Nested modal callback (Yes)
					<br />
					2. high Order Component show other component
					<br />
					3. realtime search, reselect and redux-form
					<br />
					4. translation
					<br />
					5. {this.state.ut.toUpperCase()}
					<br />
					6. recursion (Yes)
					<br />
					7. route to dispath and fetch data.
					<br />
					<div className="inline-checkbox">
						<input id="target-sample-checkbox" type="checkbox" />
						<label
							htmlFor="target-sample-checkbox"
							className="checker"
						>
							Sample image Checkbox
						</label>
					</div>
					<div>
						<input
							id="checkbox3"
							className="checkbox3imgstyle"
							type="checkbox"
							name="checkbox"
							value="3"
						/>
						<label htmlFor="checkbox3">
							Option_3_another_sample
						</label>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-lg-3">
					<ul className="list-group">
						<GeneratesCheckboxes
							chksState={this.state.checkboxes}
							handleSelect={evt => {
								this.handleCheckboxSelection(evt);
							}}
						/>
						<li className="list-group-item">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => this.toggleFirstModal()}
							>
								Choose_Checkboxes
							</button>
						</li>
					</ul>
				</div>
				<NestedModalContainer
					isShowFirstModal={this.state.firstModal}
					isShowNestedModal={this.state.nestedModal}
					isCloseAllModal={this.state.closeAll}
					toggleFirstModal={() => this.toggleFirstModal()}
					toggleNestedModal={() => this.toggleNestedModal()}
					closeAllModals={() => this.closeAllModals()}
					dialogModalClasses={this.state.modalClass}
					chkContext={this.state.checkboxes}
					returnNewChksState={(
                        newChksFromModal = {}
                        ) => this.getChksFromModal(newChksFromModal)
					}
					handleChkboxSelection={evt => {
						this.handleCheckboxSelection(evt);
					}}
				/>
				<div className="col-12 col-sm-6 col-lg-3">
					<ul className="list-group">
						<li className="list-group-item bg-secondary text-white">
							(recursion) Calculate: 5 x 4 x 3 x 2 x 1 = 120
						</li>
						<li className="list-group-item">
							result: {this.calculate5To1()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) The youngest child's age is 1.
						</li>
						<li className="list-group-item">
							result(age): {this.findYoungestChildInArray()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Get Intergers from 2 to 9
						</li>
						<li className="list-group-item">
							result: {this.grabInsFrom2To9()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Sum 1 to 6
						</li>
						<li className="list-group-item">
							result: {this.sum1To6()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Exponent of a number:
						</li>
						<li className="list-group-item">
							result: {this.exponentOneNum()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) keep Obj value includes 'Hit' and obj
							has&nbsp; 2nd deep (children) -- Check in Console.
						</li>
						<li className="list-group-item">
							result (in console 221):
							{this.recursionObjIncludesHitN2ndDeepthChildren()}
						</li>
					</ul>
				</div>
				<div className="col-12 col-sm-6 col-lg-3">
					<ul className="list-group">
						<li className="list-group-item bg-secondary text-white">
							(recursion) Search Obj by Id in Nested Object
						</li>
						<li className="list-group-item">
							result(check console 251):{' '}
							{this.searchByIdInNestedObj()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Get Value by Prop in Obj
						</li>
						<li className="list-group-item">
							result -- progress is: {this.getPropVal()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Get Value by Prop in Obj
						</li>
						<li className="list-group-item">
							result -- progress is: {this.getPropVal()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Get All keys (as obj path) in Nested Obj
						</li>
						<li className="list-group-item">
							result (all keys are:) {this.getAllKeys()}
						</li>
						<li className="list-group-item bg-secondary text-white">
							(recursion) Get Obj by smallest id
						</li>
						{/* <li className="list-group-item">
							result (smallest id is): {this.findObjBySmallestId()}
						</li> */}
					</ul>
				</div>
				<div className="centered border border-danger">
					Health Products... This postion is absolute center in
					browser
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		missChildren: state.missChildren.missChildren,
		propValObj: state.propvalObj.propvalObj
	};
};

/* const mapDispatchToProps = (dispatch) => {
} */

export default connect(
	mapStateToProps,
	{ grabMissChildren, getObjForPropValue }
)(HealthProductsCompo);
