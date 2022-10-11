import { expect, it } from "vitest";

interface Cache {
  [id: string]: string

}

const createCache = () => {
  // Solution 1
  // const cache: Record<string, string> = {
  //   // add(id: string, value: string) => void;
  //   // remove(id: string) => void;
  // };

  // Solution 2
  // const cache: {
  //   [id: string]: string
  // } = {};

  // Solution 3
  const cache: Cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
