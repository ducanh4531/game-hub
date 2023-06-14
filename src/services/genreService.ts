import { Genre } from "../entities/Genre";
import APIClient from "./api-client";

export default new APIClient<Genre>("/genres");
