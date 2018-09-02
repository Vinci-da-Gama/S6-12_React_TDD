import { Link } from 'react-router-dom';

const NoFoundCompo = () => {
	return (
		<div>
			<h1>
				404
				<Badge color="secondary">
					No Found.
				</Badge>
			</h1>
			<Link to="/">
				Go Home
			</Link>
		</div>
	);
};

export default NoFoundCompo;
