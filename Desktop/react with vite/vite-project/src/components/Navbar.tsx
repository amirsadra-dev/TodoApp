import { HStack, Image} from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import { ColorSwichToggle } from "./ColorSwichToggle";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}


export const Navbar = ({onSearch} : Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={Logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch}/>
      <ColorSwichToggle />
    </HStack>
  );
};
