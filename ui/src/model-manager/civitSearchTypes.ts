/** Reference: https://www.meilisearch.com/docs/reference/api/search */
export interface SearchRequestBody {
  /** default: ""	Query string */
  q?: string;
  /** default: 0	Number of documents to skip */
  offset?: number;
  /** default: 20	Maximum number of documents returned */
  limit?: number;
  /** default: 1	Maximum number of documents returned for a page */
  hitsPerPage?: number;
  /** default: 1	Request a specific page of results */
  page?: number;
  /** default: null	Filter queries by an attribute's value */
  filter?: string;
  /** default: null	Display the count of matches per facet */
  facets?: string[];
  /** default: ["*"]	Attributes to display in the returned documents */
  attributesToRetrieve?: string[];
  /** default: null	Attributes whose values have to be cropped */
  attributesToCrop?: string[];
  /** default: 10	Maximum length of cropped value in words */
  cropLength?: number;
  /** default: "…"	String marking crop boundaries */
  cropMarker?: string;
  /** default: null	Highlight matching terms contained in an attribute */
  attributesToHighlight?: string[];
  /** default: "<em>"	String inserted at the start of a highlighted term */
  highlightPreTag?: string;
  /** default: "</em>"	String inserted at the end of a highlighted term */
  highlightPostTag?: string;
  /** default: false	Return matching terms location */
  showMatchesPosition?: boolean;
  /** default: null	Sort search results by an attribute's value */
  sort?: string[];
  /** default: last	Strategy used to match query terms within documents */
  matchingStrategy?: string;
  /** default: false	Display the global ranking score of a document */
  showRankingScore?: boolean;
  /** default: ["*"]	Restrict search to the specified attributes */
  attributesToSearchOn?: string[];
}

export interface SearchResponse {
  /** Results of the query */
  hits: SearchHit[];
  /** Number of documents skipped */
  offset: number;
  /** Number of documents to take */
  limit: number;
  /** Estimated total number of matches */
  estimatedTotalHits: number;
  /** Exhaustive total number of matches */
  totalHits: number;
  /** Exhaustive total number of search result pages */
  totalPages: number;
  /** Number of results on each page */
  hitsPerPage: number;
  /** Current search results page */
  page: number;
  /** Processing time of the query */
  processingTimeMs: number;
  /** Query originating the response */
  query: string;
}

export interface SearchHit {
  name: string;
  hashes: string[];
  triggerWords: string[];
  id: number;
  type: string;
  nsfw: boolean;
  status: string;
  createdAt: string;
  lastVersionAt: string;
  publishedAt: string;
  locked: boolean;
  checkpointType: string;
  metrics: Metrics;
  lastVersionAtUnix: number;
  user: User;
  category: Category;
  version: SearchModelVersion;
  versions: SearchModelVersion[];
  fileFormats: string[];
  tags: Tag[];
  rank: Rank;
  canGenerate: boolean;
  images: Image[];
  availability: string;
}

export interface Metrics {
  commentCount: number;
  favoriteCount: number;
  downloadCount: number;
  rating: number;
  ratingCount: number;
  collectedCount: number;
  tippedAmountCount: number;
  weightedRating: number;
}

export interface User {
  id: number;
  username: string;
  image: string;
  profilePicture: ProfilePicture;
}

export interface ProfilePicture {
  id: number;
  url: string;
  nsfw: string;
  userId: number;
  ingestion: string;
  type: string;
  metadata: {
    userId: number;
    profilePicture: boolean;
  };
}

export interface Category {
  id: number;
  name: string;
}

export interface SearchModelVersion {
  id: number;
  name: string;
  earlyAccessTimeFrame: number;
  createdAt: string;
  trainedWords: string[];
  baseModel: string;
  baseModelType: string;
  files?: File[];
  hashes: string[];
}

export interface File {
  metadata: {
    fp: string;
    size: string;
    format: string;
  };
}

export interface Rank {
  downloadCount: number;
  favoriteCount: number;
  commentCount: number;
  ratingCount: number;
  rating: number;
  collectedCount: number;
  tippedAmountCount: number;
}

export interface Image {
  id: number;
  userId: number;
  name: string;
  url: string;
  nsfw: "None" | "Soft" | "Mature" | "X";
  nsfwLevel?: number;
  width: number;
  height: number;
  hash: string;
  type: string;
  metadata: {
    hash: string;
    width: number;
    height: number;
  };
  modelVersionId: number;
  availability: string;
  tags: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}
