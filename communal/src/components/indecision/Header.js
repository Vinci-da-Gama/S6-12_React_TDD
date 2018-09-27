import React from 'react';
import { CardTitle, CardSubtitle } from 'reactstrap';

const InDecisionHeader = (props) => {
	return (
        <div>
            <CardTitle>
                Title: { props.title.toUpperCase() }
            </CardTitle>
            {props.subtitle && <CardSubtitle>Subtitle: {props.subtitle}</CardSubtitle>}
        </div>
    );
};

InDecisionHeader.defaultProps = {
	title: 'InDecision_App'
};

export default InDecisionHeader;
