export type Route = "root" | "customNodes" | "models";

export interface PanelPosition {
  top: number;
  left: number;
}

export type CivitiModelGetResp = {
  items: Array<CivitiModel>;
};

export type CivitiModel = {
  id: number;
  name?: string;
  description?: string;
  type?: string;
  poi?: boolean;
  nsfw?: boolean;
  images?: Array<{
    nsfwLevel?: number;
    url: string; //id only
  }>;
  allowNoCredit?: boolean;
  allowCommercialUse?: string;
  allowDerivatives?: boolean;
  allowDifferentLicense?: boolean;
  stats?: CivitiModelStats;
  creator?: CivitiModelCreator;
  tags?: string[];
  modelVersions?: CivitiModelVersion[];
};

export type CivitiModelVersion = {
  id: number;
  modelId?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  publishedAt?: string;
  trainedWords?: string[];
  trainingStatus?: string | null;
  trainingDetails?: string | null;
  baseModel?: string;
  baseModelType?: string;
  earlyAccessTimeFrame?: number;
  description?: string;
  vaeId?: string | null;
  stats?: CivitiModelVersionStats;
  files?: CivitiModelFileVersion[];
  images?: CivitiModelVersionImage[];
  downloadUrl?: string;
};

export type CivitiModelStats = {
  downloadCount?: number;
  favoriteCount?: number;
  commentCount?: number;
  ratingCount?: number;
  rating?: number;
  tippedAmountCount?: number;
};

export type CivitiModelCreator = {
  username?: string;
  image?: string;
};

export type CivitiModelVersionStats = {
  downloadCount?: number;
  ratingCount?: number;
  rating?: number;
};

export type CivitiModelFileVersion = {
  id: number;
  sizeKB?: number;
  name?: string;
  type?: string;
  metadata?: CivitiFileMetadata;
  pickleScanResult?: string;
  pickleScanMessage?: string | null;
  virusScanResult?: string;
  virusScanMessage?: string | null;
  scannedAt?: string;
  hashes?: CivitiFileHashes;
  downloadUrl?: string;
  primary?: boolean;
};

export type CivitiFileMetadata = {
  fp?: string;
  size?: string;
  format?: string;
};

export type CivitiFileHashes = {
  AutoV1?: string;
  AutoV2?: string;
  SHA256?: string;
  CRC32?: string;
  BLAKE3?: string;
  AutoV3?: string;
};

export type CivitiModelVersionImage = {
  id: number;
  url?: string;
  nsfw?: "None" | "Soft" | "Mature" | "X";
  width?: number;
  height?: number;
  hash?: string;
  type?: string;
  metadata?: CivitiImageMetadata;
  meta?: CivitiImageMeta;
};

export type CivitiImageMetadata = {
  hash?: string;
  size?: number;
  width?: number;
  height?: number;
};

export type CivitiImageMeta = {
  seed?: number;
  steps?: number;
  prompt?: string;
  sampler?: string;
  cfgScale?: number;
  negativePrompt?: string;
};

export interface ModelsListRespItem {
  model_name: string;
  model_extension: string;
  model_type: string;
  file_hash?: string;
  preview?: string;
  date: Date;
}

export type ModelsListRespItemFromApi = ModelsListRespItem & { date: number };
