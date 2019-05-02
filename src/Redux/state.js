let state = {
	navBar: {
		friends: [
			{
				src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
				name: 'Ivan'
			},
			{
				src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
				name: 'Valentin1'
			},
			{
				src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
				name: 'Valentin2'
			}
		]
	},
	profilePage: {
		posts: [
			{id: 1, post: 'layer', likesCount: 15},
			{id: 2, post: 'Hello world', likesCount: 22},
			{id: 3, post: 'Hello world', likesCount: 22},
			{id: 4, post: 'yo yoy oy oy o yo y oy', likesCount: 22},
			{id: 4, post: 'hello hello hello', likesCount: 22},

		]
	},

	dialogsPage: {
		messages: [
			{id: 1, message: 'Yo-yo'},
			{id: 2, message: 'Hello world'},
			{id: 3, message: 'How are you?'},
			{id: 4, message: 'bang bang'},
			{id: 5, message: 'hello hello hello'}
		],
		messages2: [
			{id: 1, message: 'How are you?'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'How are you?'},
			{id: 4, message: 'How are you?'},
			{id: 5, message: 'How are you?'}
		],
		dialogs: [
			{id: 1, name: 'Vladimir'},
			{id: 2, name: 'Ivan'},
			{id: 3, name: 'Grigoriy'},
			{id: 4, name: 'Victor'},
			{id: 5, name: 'Roman'}
		]
	}
};

export default state;