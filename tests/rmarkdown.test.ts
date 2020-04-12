import { renderSync } from "../src/rmarkdown";

test("should produce pdf and html", () => {
  let res = renderSync("/Users/tianyishi/Documents/GitHub/rmarkdown-wrapper-js/tests/files/example.Rmd");
  expect(res.status).toEqual(0);
});
