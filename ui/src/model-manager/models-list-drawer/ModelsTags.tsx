import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import { userSettingsTable } from "../../db-tables/WorkspaceDB";
import { useEffect } from "react";

interface Props {
  selectedModel: string;
  setSelectedModel: (v: string) => void;
  modelTypeList: string[];
}

export function ModelsTags({
  selectedModel,
  setSelectedModel,
  modelTypeList,
}: Props) {
  const clickHanlder = (v: string) => {
    setSelectedModel(v);
    userSettingsTable?.upsert({
      selectedTag: v,
    });
  };

  useEffect(() => {
    userSettingsTable?.getSetting("selectedTag").then((res) => {
      res !== undefined && setSelectedModel(res);
    });
  }, [setSelectedModel]);

  return (
    <Wrap>
      {modelTypeList.map((v) => (
        <WrapItem key={v}>
          <Button
            colorScheme="blue"
            variant={selectedModel === v ? "solid" : "outline"}
            onClick={() => clickHanlder(v)}
            size={"sm"}
          >
            {v}
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}
