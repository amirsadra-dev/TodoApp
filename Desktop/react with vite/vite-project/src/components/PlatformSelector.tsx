import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { usePlatform } from "../hook/usePlatform";
import { Platform } from "../hook/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  SelectedPlatform : Platform | null;
}

export const PlatformSelector = ({ onSelectedPlatform ,SelectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <div>
      <Menu>
        <MenuButton as={Button}>{SelectedPlatform?.name || 'Platfroms'}</MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectedPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
