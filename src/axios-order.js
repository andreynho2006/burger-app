import axios from 'axios';

const instance = axios.create({
	baseURL : 'https://react-my-burger-af936.firebaseio.com/'
});

export default instance;