import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorSwichToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
        <Text whiteSpace={"nowrap"}>color Mode :</Text>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};
