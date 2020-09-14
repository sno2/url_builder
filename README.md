# Url Builder

A [Deno](https://github.com/denoland) Module for Building Urls Fast & Easy

## Usage

Just import the `buildUrl` function from `https://deno.land/x/url_builder/mod.ts` and explore! It takes in two parameters with the second being optional. The first parameter is a string and that is the url of that you want all of the options to be added onto after. The second parameter is an object with all of your options that you want for to build the url with. Here is an example usage:

```ts
import { buildUrl } from "https://deno.land/x/url_builder/mod.ts";

buildUrl("https://example.com", {
  path: "about",
});

// returns `"https://example.com/about"`
```
