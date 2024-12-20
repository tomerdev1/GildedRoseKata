"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gilded_rose_1 = require("../app/gilded-rose");
var item_1 = require("../app/item");
var items = [
    new item_1.Item("Aged Brie", 2, 0),
    new item_1.Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new item_1.Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new item_1.Item("Conjured", 3, 6),
    new item_1.Item("Normal Item", 10, 20),
];
var gildedRose = new gilded_rose_1.GildedRose(items);
console.log("-------- Day 0 --------");
console.log("name, sellIn, quality");
gildedRose.items.forEach(function (item) {
    return console.log("".concat(item.name, ", ").concat(item.sellIn, ", ").concat(item.quality));
});
for (var day = 1; day <= 5; day++) {
    gildedRose.updateQuality();
    console.log("\n-------- Day ".concat(day, " --------"));
    console.log("name, sellIn, quality");
    gildedRose.items.forEach(function (item) {
        return console.log("".concat(item.name, ", ").concat(item.sellIn, ", ").concat(item.quality));
    });
}
//# sourceMappingURL=app.js.map