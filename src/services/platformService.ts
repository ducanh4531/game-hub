import { FetchResponse } from "../hooks/useData";
import { APIClient } from "./api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default new APIClient<FetchResponse<Platform>>(
	"/platforms/lists/parents"
);
