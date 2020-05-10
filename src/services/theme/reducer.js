export default (state = 'light', { payload, type }) => {
	switch (type) {
		case 'DARK':
			return 'dark';
		case 'LIGHT':
			return 'light';
		default:
			return state;
	}
};
