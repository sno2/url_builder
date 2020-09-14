import { QueryParams } from "./query_params.ts";

export interface BuildUrlOptions {
  path?: string | string[];
  queryParams?: QueryParams;
  hash?: string;
  paramsArrayValueSeparator?: string;
  paramsBeforeHash?: boolean;
  forceLowercase?: boolean;
}
