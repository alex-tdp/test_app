import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://60a372677c6e8b0017e26f24.mockapi.io/api/v1/user'
});

export const API = {
	getUsers(page: number = 1) {
		return instance.get(`?page=${page}&limit=5`);
	},
	addUser(name: string, email: string, position: string) {
		return instance.post('', { name, email, position })
	}
}