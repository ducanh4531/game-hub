import APIClient, { FetchResponse } from "./api-client";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export default new APIClient<FetchResponse<Genre>>("/genres");
