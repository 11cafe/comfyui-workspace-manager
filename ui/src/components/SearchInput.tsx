import { Box, IconButton, Input } from "@chakra-ui/react";
import { IconSearch, IconX } from "@tabler/icons-react";
import { CSSProperties } from "react";

type Props = {
  searchValue: string;
  onUpdateSearchValue: (value: string) => void;
};

const IconSearchStyle: CSSProperties = {
  position: "absolute",
  marginLeft: "10px",
  width: "20px",
  height: "20px",
  top: "50%",
  transform: "translateY(-50%)",
}

export default function SeacrhInput(props: Props) {
  const { searchValue, onUpdateSearchValue } = props;
  const isSearchValueNotEmpty = searchValue !== "";

  return (
    <Box style={{ position: 'relative' }}>
      <IconSearch style={IconSearchStyle} />
      {isSearchValueNotEmpty && (
        <IconButton
          size="xs"
          position="absolute"
          right="5px"
          top="50%"
          transform="translateY(-50%)"
          cursor="pointer"
          background="none"
          zIndex="100"
          icon={<IconX width={15} height={15} />}
          onClick={() => onUpdateSearchValue("")}
          aria-label="clear input button"
        />
      )}
      <Input
        placeholder='Search'
        width={"auto"}
        height={"auto"}
        paddingLeft={"35px"}
        paddingBlock={"5px"}
        value={searchValue}
        onChange={({ target }) => onUpdateSearchValue(target.value)}
      />
    </Box>
  );
}