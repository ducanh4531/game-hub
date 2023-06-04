import axios from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

// create axios instance with custom configuration
const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b578aa4c5e7749d7b2bbe55d86b215fe",
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (data?: object) =>
		axiosInstance.get<T>(this.endpoint, data).then((res) => res.data);
}

export default APIClient;
