import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export const GameHading = ({ gameQuery }: Props) => {
  const Hading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }  Games`;
  return <Heading marginY={5}>{Hading}</Heading>;
};
