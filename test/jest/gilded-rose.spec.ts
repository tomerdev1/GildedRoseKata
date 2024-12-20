import { GildedRose } from "@/gilded-rose";
import { Item } from "@/item";

describe("Gilded Rose Inventory System", () => {
  describe("Adding Items", () => {
    it("should allow adding a new item to the inventory", () => {
      const gildedRose = new GildedRose([new Item("Test Item", 0, 0)]);
      const addedItem = gildedRose.items[0];
      expect(addedItem.name).toBe("Test Item");
      expect(addedItem.sellIn).toBe(0);
      expect(addedItem.quality).toBe(0);
    });
  });

  describe("General Item Quality Updates", () => {
    it("should reduce quality by 1 for items with sellIn > 0", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 1, 1)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(0);
      expect(updatedItem.quality).toBe(0);
    });

    it("should reduce quality twice as fast after sell-by date", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 0, 4)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(-1);
      expect(updatedItem.quality).toBe(2);
    });

    it("should never reduce quality below 0", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 0, 1)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(-1);
      expect(updatedItem.quality).toBe(0);
    });
  });

  describe("Aged Brie Behavior", () => {
    it("should increase in quality as it ages", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 1)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(0);
      expect(updatedItem.quality).toBe(2);
    });

    it("should never exceed a quality of 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(0);
      expect(updatedItem.quality).toBe(50);
    });

    it("should continue increasing quality past the sell-by date, up to 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", -10, 10)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(-11);
      expect(updatedItem.quality).toBe(12);
    });
  });

  describe("Sulfuras Rules", () => {
    it("should never decrease quality or sellIn for Sulfuras", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 1, 80),
      ]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(1);
      expect(updatedItem.quality).toBe(80);
    });
  });

  describe("Backstage Pass Behavior", () => {
    it("should increase quality by 1 when more than 10 days remain", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1),
      ]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(10);
      expect(updatedItem.quality).toBe(2);
    });

    it("should increase quality by 2 when 10 to 6 days remain", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 6, 1),
      ]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(5);
      expect(updatedItem.quality).toBe(3);
    });

    it("should increase quality by 3 when 5 days or fewer remain", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 3, 1),
      ]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(2);
      expect(updatedItem.quality).toBe(4);
    });

    it("should drop quality to 0 after the concert", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
      ]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(-1);
      expect(updatedItem.quality).toBe(0);
    });
  });
  describe("Conjured Item Behavior", () => {
    it("should degrade in quality twice as fast before sell-by date", () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 1, 4)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(0);
      expect(updatedItem.quality).toBe(2);
    });

    it("should degrade in quality four times as fast after sell-by date", () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 8)]);
      const updatedItems = gildedRose.updateQuality();
      const updatedItem = updatedItems[0];
      expect(updatedItem.sellIn).toBe(-1);
      expect(updatedItem.quality).toBe(4);
    });
  });
});
