import { Grid, GridItem } from "@chakra-ui/react";
import { ModelsListRespItem } from "../types";
import { ModelItem } from "./ModelItem";

interface Props {
  list: ModelsListRespItem[];
}

export function ModelsList({ list }: Props) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1} marginTop={2}>
      {list.map((v) => {
        return (
          <GridItem>
            <ModelItem data={v} key={v.model_name} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
