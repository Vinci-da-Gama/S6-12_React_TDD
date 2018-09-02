import React from 'react';

import CardContent from '../components/contents/card-content';

export const renderCards = (item, idx) => {
	return (
		<div className="col-12 col-md-6 col-lg-3" key={idx}>
			<CardContent item={item} />
		</div>
	);
};
