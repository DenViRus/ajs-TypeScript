import { Cart } from "../service/Cart";
import { Book } from "../domain/Book";
import { MusicAlbum } from "../domain/MusicAlbum";
import { Movie } from "../domain/Movie";

test("new cart should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("purchases should added to the cart", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1010,
      "The Avengers",
      500,
      2012,
      "USA",
      "Avengers Assemble!",
      "Fantasy, Action, Adventure",
      "137 мин./02:17"
    )
  );

  expect(cart.items.length).toBe(3);
});

test("check cart.getSum", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1010,
      "The Avengers",
      500,
      2012,
      "USA",
      "Avengers Assemble!",
      "Fantasy, Action, Adventure",
      "137 мин./02:17"
    )
  );

  expect(cart.getSum()).toBe(3400);
});

test("check cart.getSumWithDiscount", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1010,
      "The Avengers",
      500,
      2012,
      "USA",
      "Avengers Assemble!",
      "Fantasy, Action, Adventure",
      "137 мин./02:17"
    )
  );

  expect(cart.getSumWithDiscount(10)).toBe(3060);
});

test("check cart.deleteItem", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1010,
      "The Avengers",
      500,
      2012,
      "USA",
      "Avengers Assemble!",
      "Fantasy, Action, Adventure",
      "137 мин./02:17"
    )
  );
  cart.deleteItem(1001);

  const received = cart;
  const expected = {
    _items: [
      { id: 1008, name: "Meteora", author: "Linkin Park", price: 900 },
      {
        id: 1010,
        name: "The Avengers",
        price: 500,
        year: 2012,
        country: "USA",
        tagline: "Avengers Assemble!",
        genre: "Fantasy, Action, Adventure",
        time: "137 мин./02:17",
      },
    ],
  };

  expect(received).toEqual(expected);
});

test("check cart.deleteItem throw Error", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1010,
      "The Avengers",
      500,
      2012,
      "USA",
      "Avengers Assemble!",
      "Fantasy, Action, Adventure",
      "137 мин./02:17"
    )
  );

  expect(() => {
    cart.deleteItem(1011);
  }).toThrow();
});
