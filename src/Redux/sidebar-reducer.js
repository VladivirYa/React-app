let initialState = {
	friends: [
		{
			id: 0,
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
			name: 'Ivan'
		},
		{
			id: 1,
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
			name: 'Valentin1'
		},
		{
			id: 2,
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
			name: 'Valentin2'
		}
	]
}

const sidebarReducer = (state = initialState, action) => {


	return state;
}

export default  sidebarReducer;