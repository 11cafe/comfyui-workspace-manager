import { Checkbox } from "@chakra-ui/react";
import { useModelListSettings } from "./useModelListSettings";

export default function ShowFileNameSettings() {
  const [checked, setChecked] = useModelListSettings("showFileName", false);

  return (
    <Checkbox
      isChecked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    >
      Show file name instead of model name
    </Checkbox>
  );
}
