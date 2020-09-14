# Url Builder

A [Deno](https://github.com/denoland) Module for Building Urls Fast & Easy

## Usage

Just import the `buildUrl` function from `https://raw.githubusercontent.com/CodingCarter/url_builder/master/mod.ts` and explore! It takes in two parameters with the second being optional. The first parameter is a string and that is the url of that you want all of the options to be added onto after. The second parameter is an object that matches the `BuildUrlOptions` interface which is show below:

```ts
interface BuildUrlOptions {
  path?: string | string[];
  queryParams?: QueryParams;
  hash?: string;
  paramsArrayValueSeparator?: string;
  paramsBeforeHash?: boolean;
  forceLowercase?: boolean;
}
```

and the `QueryParams` interface:

```ts
interface QueryParams {
  [queryParamKey: string]: string | string[];
}
```

Here is an example usage:

```ts
import { buildUrl } from "https://raw.githubusercontent.com/CodingCarter/url_builder/master/mod.ts";

buildUrl("https://example.com", {
  path: "about",
});
```

The above code `buildUrl` function will return `"https://example.com/about"`. Now, let's start to look at all of the options that you can take advantage of!

The following code will return `"https://example.com/about/me"`

```ts
buildUrl("https://example.com", {
  path: ["about", "me"],
});
```

The following code will return `"https://example.com?testing=true"`

```ts
buildUrl("https://example.com", {
  queryParams: {
    testing: "true",
  },
});
```

The following code will return `"https://example.com?testing=true1,true2"`

```ts
buildUrl("https://example.com", {
  queryParams: {
    testing: ["true1", "true2"],
  },
});
```

The following code will return `"https://example.com?testing=true1|true2"`

```ts
buildUrl("https://example.com", {
  queryParams: {
    testing: ["true1", "true2"],
  },
  paramsArrayValueSeparator: "|",
});
```
