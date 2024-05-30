import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hook/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getImageCroped } from "../assets/services/imageUrl";
import { Emoji } from "./Emoji";
export interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={getImageCroped(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
        <CriticScore score={game.metacritic} />
      </CardBody>
    </Card>
  );
};
