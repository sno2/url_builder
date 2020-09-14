import { assertEquals } from "https://deno.land/std@0.69.0/testing/asserts.ts";

import { buildUrl } from "../mod.ts";

Deno.test("No Options", () => {
  const url = buildUrl("https://example.com");

  assertEquals(url, "https://example.com");
});

Deno.test("No Options with Trailing Slash", () => {
  const url = buildUrl("https://example.com/");

  assertEquals(url, "https://example.com/");
});

Deno.test("Empty Url String & Options", () => {
  const url = buildUrl("", {
    path: "testme",
    queryParams: {
      testing: "123",
    },
    hash: "test",
  });

  assertEquals(url, "/testme?testing=123#test");
});

Deno.test("String Path Option", () => {
  const url = buildUrl("https://example.com", {
    path: "about",
  });

  assertEquals(url, "https://example.com/about");
});

Deno.test("Array Path Option", () => {
  const url = buildUrl("https://example.com", {
    path: ["about1", "about2", "about3"],
  });

  assertEquals(url, "https://example.com/about1/about2/about3");
});

Deno.test("Query Params w/ String Values", () => {
  const url = buildUrl("https://example.com", {
    queryParams: {
      testing: "true",
      testing2: "true",
    },
  });

  assertEquals(url, "https://example.com?testing=true&testing2=true");
});

Deno.test("Query Params w/ Array Values", () => {
  const url = buildUrl("https://example.com", {
    queryParams: {
      testing: ["true1", "true2"],
    },
  });

  assertEquals(url, "https://example.com?testing=true1,true2");
});

Deno.test("Query Params w/ Array Values & Custom Separator", () => {
  const url = buildUrl("https://example.com", {
    queryParams: {
      testing: ["true1", "true2"],
    },
    paramsArrayValueSeparator: "|",
  });

  assertEquals(url, "https://example.com?testing=true1|true2");
});

Deno.test("Simple Hash", () => {
  const url = buildUrl("https://example.com", {
    hash: "menu",
  });

  assertEquals(url, "https://example.com#menu");
});

Deno.test("Params Before Hash is false", () => {
  const url = buildUrl("https://example.com", {
    queryParams: {
      testing: ["true1", "true2"],
    },
    hash: "menu",
    paramsBeforeHash: false,
  });

  assertEquals(url, "https://example.com#menu?testing=true1,true2");
});

Deno.test("Force Lowercase as only Option", () => {
  const url = buildUrl("https://Example.com", {
    forceLowercase: true,
  });

  assertEquals(url, "https://example.com");
});

Deno.test("Force Lowercase w/ Array Path", () => {
  const url = buildUrl("https://Example.com", {
    path: ["about", "cOntact"],
    forceLowercase: true,
  });

  assertEquals(url, "https://example.com/about/contact");
});
