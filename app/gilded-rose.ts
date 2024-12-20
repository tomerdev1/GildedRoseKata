import { Item, SpecialItems } from "./item";
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
    for (let item of this.items) {
      switch (item.name) {
        case SpecialItems.AgedBrie:
          item = updateAgedBrie(item);
          break;
        case SpecialItems.BackstagePass:
          item = updateBackstagePasses(item);
          break;
        case SpecialItems.Sulfuras:
          item = updateSulfuras(item);
          break;
        default:
          item = updateNormalItem(item);
      }
    }
    return this.items;
  }
}
