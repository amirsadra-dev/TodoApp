import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GridGames } from "./components/GridGames";
import { GeneresList } from "./components/GeneresList";
import { useState } from "react";
import { Genere } from "./hook/useGenres";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hook/useGames";
import { SortSelector } from "./components/SortSelector";
import { GameHading } from "./components/GameHading";

export interface GameQuery {
  genre: Genere | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GeneresList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
              <PlatformSelector
                SelectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </HStack>
          </Box>
          <GridGames gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
