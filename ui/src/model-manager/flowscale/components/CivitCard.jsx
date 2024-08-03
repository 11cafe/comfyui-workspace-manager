import React, { useCallback, useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { Box, Button, IconButton, Label } from "@primer/react";
import { ArrowSquareOut, DownloadSimple } from "phosphor-react";
import { findSfwImageFromModel } from "../../../utils/findSfwImage";
import { userSettingsTable } from "../../../db-tables/WorkspaceDB";
import { KBtoGB } from "../../utils";
import {
  getFileEssential,
  isCivitModel,
} from "../../install-models/util/modelTypes";
import { getCivitApiKey } from "../../../utils/civitUtils";

const IMAGE_SIZE = 280;

export const CivitCard = ({ model, onClickInstallModel, installing }) => {
  const [modelPhoto, setModelPhoto] = useState();
  useEffect(() => {
    loadPhoto();
    async function loadPhoto() {
      const showNsfwThumbnail = await userSettingsTable?.getSetting(
        "showNsfwModelThumbnail",
      );
      setModelPhoto(
        findSfwImageFromModel(model, IMAGE_SIZE, showNsfwThumbnail),
      );
    }
  }, [model]);
  const versions = isCivitModel(model) ? model.modelVersions : model.versions;
  const [selectedFile, setSelectedFile] = useState(versions?.[0]?.name ?? "");
  const curFile = versions?.find(
    (versionFile) => versionFile?.name === selectedFile,
  );
  const getModelLink = () => {
    return `https://civitai.com/models/${model.id}`;
  };
  const installHandler = useCallback(() => {
    if (curFile == null) {
      console.error("no file is find by name", selectedFile);
      return;
    }
    onClickInstallModel(getFileEssential(curFile, model.name), model);
  }, [selectedFile]);
  const sizeKB = getFileEssential(curFile)?.sizeKB;

  return (
    <Box
      sx={{
        borderRadius: "14px",
        border: "2px solid #343B45",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#22272F",
        padding: "0px",
        gap: "12px",
      }}
    >
      {modelPhoto && (
        <Box
          sx={{
            height: "200px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#16191D",
          }}
        >
          <img
            src={modelPhoto}
            alt={model?.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "12px",
          padding: "5px 20px 20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {model?.type && (
              <Label
                variant="accent"
                sx={{
                  width: "fit-content",
                }}
              >
                {model?.type}
              </Label>
            )}
            <IconButton
              onClick={() => window.open(getModelLink(), "_blank")}
              icon={ArrowSquareOut}
              variant="invisible"
            />
          </Box>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#C4C4CA",
              margin: "8px 0px",
            }}
          >
            {model?.name}
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: !modelPhoto ? "end" : "space-between",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Dropdown
            options={versions}
            selectedIndex={versions.findIndex(
              (version) => version.name === selectedFile,
            )}
            onSelect={(index) => {
              setSelectedFile(versions[index].name);
            }}
            overlayWidth="auto"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="primary"
            onClick={() => installHandler()}
            disabled={Boolean(
              (selectedFile && installing.includes(selectedFile)) ||
                !getCivitApiKey(),
            )}
            title={
              !getCivitApiKey()
                ? "Please add Civit API key"
                : `Install ${selectedFile}`
            }
            leadingVisual={DownloadSimple}
            sx={{
              color: "#fff",
              fontSize: "16px",
              textAlign: "center",
            }}
            block
          >
            Install{" "}
            {sizeKB && (
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                [{KBtoGB(sizeKB)}]
              </span>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
