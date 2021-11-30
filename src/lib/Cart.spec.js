import Cart from "./Cart";

describe("Cart", () => {
  let cart;

  let product = {
    title: "Adidas",
    price: 35388,
  };

  let product2 = {
    title: "Nike",
    price: 41872,
  };

  //antes de cada teste
  beforeEach(() => {
    cart = new Cart();
  });

  describe("getTotal()", () => {
    it("Deve retornar 0 quando getTotal() é executado em uma instância recém criada ", () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it("deve multiplicar quantidade e preço e retornar a quantia total ", () => {
      cart.add({
        product,
        quantity: 2,
      });

      expect(cart.getTotal().getAmount()).toEqual(70776);
    });

    it("Deve garantir que não exista mais de um produto por vez", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal().getAmount()).toEqual(35388);
    });

    it("Deve atualizar o valor total quando o produto é removido ", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal().getAmount()).toEqual(41872);

      //112.648
    });
  });

  describe("checkout()", () => {
    it("deve retornar um objeto com o total e a lista de itens", () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it("deve retornar um objeto com o total e a lista de itens quando sumary() for chamado", () => {
      cart.add({
        product,
        quantity: 5,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.sumary()).toMatchSnapshot();
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });

    it("deve limpar o carrinho quando checkout() for chamado", () => {
      cart.add({
        product: product2,
        quantity: 3,
      });

      cart.checkout();

      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  });
});
