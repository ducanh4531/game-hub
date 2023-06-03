import { FetchResponse } from "../hooks/useData";
import { APIClient } from "./api-client";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const genreService = new APIClient<FetchResponse<Genre>>("/genres");

export default genreService;
