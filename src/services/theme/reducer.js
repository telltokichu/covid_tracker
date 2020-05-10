export default (state = 'dark', { payload, type }) => {
	switch (type) {
		case 'DARK':
			return 'dark';
		case 'LIGHT':
			return 'light';
		default:
			return state;
	}
};
