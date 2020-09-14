# Url Builder

A [Deno](https://github.com/denoland) Module for Building Urls Fast & Easy

## Usage

Just import the `buildUrl` function from `https://deno.land/x/url_builder/mod.ts` and explore! It takes in two parameters with the second being optional. The first parameter is a string and that is the url of that you want all of the options to be added onto after. The second parameter is an object with all of your options that you want for to build the url with. Here is an example usage using the `path` options property:

```ts
import { buildUrl } from "https://deno.land/x/url_builder/mod.ts";

buildUrl("https://example.com", {
  path: "about",
});
```

The above function will return `"https://example.com/about"`. The `path` property can also be an array in which the url builder will automatically add slashes between the routes in the url. Here is how we can do that:

```ts
buildUrl("https://example.com", {
  path: ["user", "cartersnook"],
});
```

The function above will be returning `"https://example.com/user/cartersnook"`. If you want to pass in a hash to make the user go to the element with the id of `follow`, just add in the hash property to the options object:

```ts
buildUrl("https://example.com", {
  path: ["user", "cartersnook"],
  hash: "follow",
});
```

The code will then return `"https://example.com/user/cartersnook#follow"`. Now, let's say that you need to add in some query params to set the user's locale. We can do that by setting some key/value pairs into the `queryParams` property of the object parameter.

```ts
buildUrl("https://example.com", {
  path: ["user", "cartersnook"],
  queryParams: {
    locale: "en-us",
  },
  hash: "follow",
});
```

Now, the function will be returning `"https://example.com/user/cartersnook?locale=en-us#follow"`. If you need to add more `queryParams`, just add another key/value pair and watch as it automatically adds it to the url!

```ts
buildUrl("https://example.com", {
  path: ["user", "cartersnook"],
  queryParams: {
    locale: "en-us",
    uid: "123456789",
  },
  hash: "follow",
});
```

After all of that, the `buildUrl` function will return `"https://example.com/user/cartersnook?locale=en-us&uid=123456789#follow"`! Using an api and need to declare multiple values to one of the `queryParams`? Just set the `queryParam` key to an array of strings and it will separate all of your values with a comma!

```ts
buildUrl("https://example.com", {
  path: ["user", "cartersnook"],
  queryParams: {
    locale: "en-us",
    uid: "123456789",
    pages_visited: ["about", "contact"],
  },
  hash: "follow",
});
```

Here is the returned output: `"https://example.com/user/cartersnook?locale=en-us&uid=123456789&pages_visited=about,contact#follow"`! Alright, now we know the basics of using the Url Builder module, let's dive into its nice features that you might need to know. If you want to switch the position of the `queryParams` and the `hash` in the url, just set the `paramsBeforeHash` property in the options to `false`. So, you need the value of the params of the `pages_visited` param for a page to be separated by a vertical bar |. Set the `paramsArrayValueSeparator` property to `"|"` and it will do it for you!

```ts
buildUrl("https://example.com", {
  path: ["user", "cartersnook"],
  queryParams: {
    locale: "en-us",
    uid: "123456789",
    pages_visited: ["about", "contact"],
  },
  hash: "follow",
  paramsArrayValueSeparator: "|",
});
```

It will now return `"https://example.com/user/cartersnook?locale=en-us&uid=123456789&pages_visited=about|contact#follow"`. Thanks for reading, and I hope you enjoy using our module!

## Inspiration

The inspiration for Url Builder was the [build-url](https://www.npmjs.com/package/build-url) npm package by [steverydz](https://github.com/steverydz)!

## Contributors

- [Carter Snook](https://github.com/CodingCarter)

Add your own Github in a PR if you contribute please!
