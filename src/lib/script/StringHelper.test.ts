import { expect, test } from "vitest";
import { StringHelper } from "./StringHelper";

test("StringHelper.UrlCombine", () => {
  expect(StringHelper.UrlCombine("/home/", "/index/")).toBe("/home/index");
  expect(StringHelper.UrlCombine("home", "index")).toBe("/home/index");
});
