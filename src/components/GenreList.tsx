import { List, ListItem, Image, Text, HStack, Spinner } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return null;

	return isLoading ? (
		<Spinner />
	) : (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
