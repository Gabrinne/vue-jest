import { queryString, parse } from "./queryString";

describe("objeto para a query string", () => {
  it("deve criar uma query string valida quando um objeto é fornecido", () => {
    const objt = {
      name: "Gabrinne",
      profession: "developer",
    };

    expect(queryString(objt)).toBe("name=Gabrinne&profession=developer");
  });

  it("deve criar uma query string valida quando um array é fornecido", () => {
    const obj = {
      name: "Gabrinne",
      abilities: ["JS", "TDD"],
    };

    expect(queryString(obj)).toBe("name=Gabrinne&abilities=JS,TDD");
  });

  it("Deve lançar um erro quando um objeto é passado como valor", () => {
    const obj = {
      name: "Gabrinne",
      abilities: {
        first: "JS",
        second: "TDD",
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
describe("query string para objeto", () => {
  it("deve converter uma query string para objeto", () => {
    const qs = "name=Gabrinne";

    expect(parse(qs)).toEqual({
      name: "Gabrinne",
    });
  });
  it("deve converter uma query string  para objeto separado por vírgulas ", () => {
    const qs = "name=Gabrinne&abilities=js,tdd";

    expect(parse(qs)).toEqual({
      name: "Gabrinne",
      abilities: ["js", "tdd"],
    });
  });
});
