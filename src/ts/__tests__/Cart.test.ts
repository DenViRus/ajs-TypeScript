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
