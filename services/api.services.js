import axios from 'axios';
import { getHeader, getHeaderFile, getHeaderLogin } from '../config/config';

export function http() {
	return axios.create({
		//baseURL: 'http://localhost:9079/api/v1',
		baseURL: 'http://165.227.92.147:9079/api/v1',
		headers: getHeader(),
	});
}
export function httpLogin() {
	return axios.create({
		//baseURL: 'http://localhost:9079/api',
		baseURL: 'http://165.227.92.147:9079/api',
		headers: getHeaderLogin(),
	});
}

export function httpFile() {
	return axios.create({
		//baseURL: 'http://localhost:9079/api/v1',
		baseURL: 'http://165.227.92.147:9079/api/v1',
		headers: getHeaderFile(),
	});
}
