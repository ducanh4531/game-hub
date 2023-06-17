interface ResolutionTrailer {
	480: string;
	max: string;
}

export default interface Trailer {
	id: number;
	name: string;
	preview: string;
	data: ResolutionTrailer;
}
