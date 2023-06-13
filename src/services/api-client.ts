import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
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

	getAll = (config?: AxiosRequestConfig) =>
		axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);

	get = (id?: number | string) =>
		axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default APIClient;
