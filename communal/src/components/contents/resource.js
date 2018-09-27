import React from 'react';

const ResourceCompo = ({ book, match }) => {
    const resource = book.resources.find((elem) => elem.id === match.params.resourceId);
	return (
        <div className="card">
            <div className="card-header">
                {resource.name}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    {resource.description}
                </li>
                <li className="list-group-item">
                    <a href={resource.url} target="_blank">
                        More info -- check this link
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ResourceCompo;
