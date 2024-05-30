import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchInput = ({onSearch} : Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            onSearch(ref.current.value);
          }
        }}
      >
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="field"
        />
      </form>
    </>
  );
};
