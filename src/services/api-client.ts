import axios from "axios";

// create axios instance with custom configuration
export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b578aa4c5e7749d7b2bbe55d86b215fe",
	},
});
