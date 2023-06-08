import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import { shallow } from "zustand/shallow";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const { genreId, setGenreId } = useGameQueryStore(
		(s) => ({
			genreId: s.gameQuery.genreId,
			setGenreId: s.setGenreId,
		}),
		shallow
	);

	if (error) return <p>{error.message}</p>;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								// preserve img's aspect ratio fit in container and img not be broken
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							/>
							{/* by default, buttons don't wrap text */}
							<Button
								fontSize="lg"
								// normal as opposed to nowrap
								whiteSpace="normal"
								textAlign="left"
								variant="link"
								fontWeight={
									genre.id === genreId ? "bold" : "normal"
								}
								onClick={() => setGenreId(genre.id)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
