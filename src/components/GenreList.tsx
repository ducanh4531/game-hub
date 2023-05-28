import {
	List,
	ListItem,
	Image,
	Button,
	HStack,
	Spinner,
	Heading,
} from "@chakra-ui/react";

import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return null;

	return isLoading ? (
		<Spinner />
	) : (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genres
			</Heading>
			<List>
				{genres.map((genre) => (
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
