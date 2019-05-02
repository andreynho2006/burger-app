import axios from 'axios';

const instance = axios.create({
	baseIRL : 'https://react-my-burger-af936.firebaseio.com/'
});

export default instance;