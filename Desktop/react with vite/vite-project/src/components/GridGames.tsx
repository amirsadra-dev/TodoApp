import { SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../hook/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";
import { Text } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

export const GridGames = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {loading &&
        Skeletons.map((Skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={Skeleton} />
          </GameCardContainer>
        ))}
      {!data ? (
        <p>loading...</p>
      ) : (
        data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))
      )}
    </SimpleGrid>
  );
};
