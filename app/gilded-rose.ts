export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const isQualityIncreasePossible = (item: Item) => item.quality < 50;
    const isQualityDecreasePossible = (item: Item) => item.quality > 0;

    const isAgedBrie = (item: Item) => item.name === "Aged Brie";
    const isBackstagePass = (item: Item) =>
      item.name === "Backstage passes to a TAFKAL80ETC concert";
    const isSulfuras = (item: Item) =>
      item.name === "Sulfuras, Hand of Ragnaros";

    const updateNormalItem = (item: Item) => {
      if (isQualityDecreasePossible(item)) item.quality--;
      item.sellIn--;
      if (item.sellIn < 0 && isQualityDecreasePossible(item)) item.quality--;
    };
    const updateAgedBrie = (item: Item) => {
      if (isQualityIncreasePossible(item)) item.quality++;
      item.sellIn--;
      if (item.sellIn < 0 && isQualityIncreasePossible(item)) item.quality++;
    };
    const updateBackstagePasses = (item: Item) => {
      if (isQualityIncreasePossible(item)) {
        item.quality++;
        if (item.sellIn < 11) item.quality++;
        if (item.sellIn < 6) item.quality++;
      }
      item.sellIn--;
      if (item.sellIn < 0) {
        item.quality = 0;
      }
    };
    const updateSulfuras = (item: Item) => {};

    for (const item of this.items) {
      if (isAgedBrie(item)) {
        updateAgedBrie(item);
      } else if (isBackstagePass(item)) {
        updateBackstagePasses;
      } else if (isSulfuras(item)) {
        updateSulfuras(item);
      } else {
        updateNormalItem;
      }
    }
    return this.items;
  }
}

// for (let i = 0; i < this.items.length; i++) {
//   if (
//     this.items[i].name != "Aged Brie" &&
//     this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
//   ) {
//     if (this.items[i].quality > 0) {
//       if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
//         this.items[i].quality = this.items[i].quality - 1;
//       }
//     }
//   } else {
//     if (this.items[i].quality < 50) {
//       this.items[i].quality = this.items[i].quality + 1;
//       if (
//         this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
//       ) {
//         if (this.items[i].sellIn < 11) {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//         if (this.items[i].sellIn < 6) {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }
//   }
//   if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
//     this.items[i].sellIn = this.items[i].sellIn - 1;
//   }
//   if (this.items[i].sellIn < 0) {
//     if (this.items[i].name != "Aged Brie") {
//       if (
//         this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
//       ) {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         this.items[i].quality =
//           this.items[i].quality - this.items[i].quality;
//       }
//     } else {
//       if (this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1;
//       }
//     }
//   }
// }
