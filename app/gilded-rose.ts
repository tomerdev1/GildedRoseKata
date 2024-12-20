import { Item } from "./item";
import {
  updateAgedBrie,
  updateBackstagePasses,
  updateNormalItem,
  updateSulfuras,
} from "./updateQuality";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const isAgedBrie = (item: Item) => item.name === "Aged Brie";
    const isBackstagePass = (item: Item) =>
      item.name === "Backstage passes to a TAFKAL80ETC concert";
    const isSulfuras = (item: Item) =>
      item.name === "Sulfuras, Hand of Ragnaros";

    for (const item of this.items) {
      if (isAgedBrie(item)) {
        updateAgedBrie(item);
      } else if (isBackstagePass(item)) {
        updateBackstagePasses(item);
      } else if (isSulfuras(item)) {
        updateSulfuras(item);
      } else {
        updateNormalItem(item);
      }
    }
    return this.items;
  }
}
