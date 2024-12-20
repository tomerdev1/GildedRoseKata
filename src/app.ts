import { GildedRose } from "../app/gilded-rose";
import { Item } from "../app/item";

const items = [
  new Item("Aged Brie", 2, 0),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Conjured Mana Cake", 3, 6),
  new Item("Normal Item", 10, 20),
];

const gildedRose = new GildedRose(items);

console.log("-------- Day 0 --------");
console.log("name, sellIn, quality");
gildedRose.items.forEach((item) =>
  console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
);

for (let day = 1; day <= 5; day++) {
  gildedRose.updateQuality();
  console.log(`\n-------- Day ${day} --------`);
  console.log("name, sellIn, quality");
  gildedRose.items.forEach((item) =>
    console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
  );
}
