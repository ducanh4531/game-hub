import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genreService";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
	const { data, isLoading, error } = useGenres();

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
									genre.id === selectedGenre?.id
										? "bold"
										: "normal"
								}
								onClick={() => onSelectGenre(genre)}
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
