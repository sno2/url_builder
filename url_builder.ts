import { BuildUrlOptions } from "./models/build_url_options.ts";

// TODO: Some of this code should probably be re-written...

/**
 * Returns a string which is the generated url with the given url and options.
 * @param url The url that you want to come before the path, params, and hashes of the url.
 * @param options The options that are used to create the end of the url.
 */
export function buildUrl(url: string, options?: BuildUrlOptions): string {
  const urlHasTrailingSlash = () => url.charAt(url.length - 1) === "/";

  const hadTrailingSlashInitially = urlHasTrailingSlash();

  if (options) {
    const {
      path,
      queryParams,
      hash,
      paramsArrayValueSeparator,
      paramsBeforeHash,
      forceLowercase,
      ignoreFalseyParams,
    } = options;

    if (path) {
      if (Array.isArray(path)) {
        for (const pathItem of path) {
          if (urlHasTrailingSlash()) url += pathItem;
          else url += `/${pathItem}`;
        }
      } else {
        if (urlHasTrailingSlash()) url += path;
        else url += `/${path}`;
      }

      if (hadTrailingSlashInitially) url += "/";
    }

    const addParams = () => {
      const queries: string[] = [];

      for (const queryParamKey in queryParams) {
        const _queryParamValue = queryParams[queryParamKey];
        let queryParamString: string;

        if (Array.isArray(_queryParamValue)) {
          queryParamString = _queryParamValue.join(
            paramsArrayValueSeparator || ","
          );
        } else {
          queryParamString = _queryParamValue;
        }
        if (!ignoreFalseyParams && _queryParamValue) {
          queries.push(`${queryParamKey}=${queryParamString}`);
        }
      }

      url += `?${queries.join("&")}`;
    };

    const addHash = () => (url += `#${hash}`);

    // TODO: Better implementation for ordering of `addParams` and `addHash`
    if (paramsBeforeHash === false) {
      if (hash) addHash();
      if (queryParams) addParams();
    } else {
      if (queryParams) addParams();
      if (hash) addHash();
    }

    if (forceLowercase === true) url = url.toLowerCase();
  }

  return url;
}
