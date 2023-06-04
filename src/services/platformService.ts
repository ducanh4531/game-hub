import APIClient, { FetchResponse } from "./api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default new APIClient<FetchResponse<Platform>>(
	"/platforms/lists/parents"
);
