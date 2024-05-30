import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genere } from "../hook/useGenres";

interface Props {
  onSelectGenre: (genre: Genere) => void;
  selectedGenre: Genere | null;
}

export const GeneresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (loading) return <Spinner />;

  if (error) return null;
  return (
    <div>
      <Heading marginBottom={2} fontSize="xx-large">
        Genres
      </Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={2}>
              <HStack>
                <Image
                  boxSize="35px"
                  objectFit="cover"
                  borderRadius={8}
                  src={genre.image_background}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
