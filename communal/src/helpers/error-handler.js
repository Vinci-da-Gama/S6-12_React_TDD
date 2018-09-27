export const handleError = err => {
	console.log(err);
};

export const handleNoData = (disp, ce) => {
	const errObj = {
		errorMessage: 'No data return.',
		success: false,
		responseCode: 0
	};

	const ThreeThousand = 3000;

	disp(ce(errObj));
	setTimeout(() => {
		window.location.reload();
	}, ThreeThousand);
};
