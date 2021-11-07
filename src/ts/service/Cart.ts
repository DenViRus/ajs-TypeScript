import { Buyable } from "../domain/Buyable";

export class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSum(): number {
    return this._items.reduce(
      (accum: number, current: Buyable) => accum + current.price,
      0
    );
  }

  getSumWithDiscount(discount: number): number {
    const sum: number = this.getSum();
    return sum - (sum * discount) / 100;
  }

  deleteItem(id: number): void {
    const itemId: number = this._items.findIndex(
      (item: Buyable) => item.id === id
    );
    if (itemId === -1) {
      throw new Error("Product with this ID was not found");
    } else {
      this._items.splice(itemId, 1);
    }
  }
}
