import React from 'react';

export const GeneratesCheckboxes = ({ chksState, handleSelect }) => {
	return Object.keys(chksState).map((elem, idx) => {
		console.log('!!!!!!!!!5 -- ', chksState[elem] !== '');
		return (
			<li className="list-group-item" key={elem + idx}>
				<label htmlFor={elem}>
					Label
					{idx}
				</label>
				<input
					type="checkbox"
					value={chksState[elem]}
					id={elem}
					name={elem}
					defaultChecked={`${chksState[elem]}` !== '' ? true : false}
					onChange={event => {
						handleSelect(event);
					}}
				/>
			</li>
		);
	});
};
