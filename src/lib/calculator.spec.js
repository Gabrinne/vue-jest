import { sum } from "./calculator";

it("Deve somar 2 mais 2 e retornar 4 ", () => {
  expect(sum(2, 2)).toBe(4);
});
