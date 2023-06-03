import axios from "axios";

// create axios instance with custom configuration
const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b578aa4c5e7749d7b2bbe55d86b215fe",
	},
});

export class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);
}

export default axiosInstance;
