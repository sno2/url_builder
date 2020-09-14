# Url Builder

A [Deno](https://github.com/denoland) Module for Building Urls Fast & Easy

## Usage

Just import the `buildUrl` function from `https://raw.githubusercontent.com/CodingCarter/url_builder/master/mod.ts` and explore!

Here is an example usage:

```ts
import { buildUrl } from "https://raw.githubusercontent.com/CodingCarter/url_builder/master/mod.ts";

buildUrl("https://example.com", {
  path: "about",
});
```

The above code `buildUrl` function will return `"https://example.com/about"`. Now, let's start to look at all of the options that you can take advantage of!

```ts
buildUrl("https://example.com", {
  path: ["about", "me"],
}); // returns `"https://example.com/about/me"`

buildUrl("https://example.com", {
  queryParams: {
    testing: "true",
  },
}); // returns `"https://example.com?testing=true"`

buildUrl("https://example.com", {
  queryParams: {
    testing: ["true1", "true2"],
  },
}); // returns `"https://example.com?testing=true1,true2"`

buildUrl("https://example.com", {
  queryParams: {
    testing: ["true1", "true2"],
  },
  paramsArrayValueSeparator: "|",
}); // returns `"https://example.com?testing=true1|true2"`
```
