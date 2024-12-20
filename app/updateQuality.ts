import { Item } from "./item";

const isQualityAboveMinimum = (quality) => quality > 0;
const isQualityBelowMaximum = (quality) => quality < 50;

const decreaseQuality = (quality) =>
  isQualityAboveMinimum(quality) ? quality-- : quality;
const increaseQuality = (quality) =>
  isQualityBelowMaximum(quality) ? quality++ : quality;

const updateBasic = (item: Item) => {
  item.quality = decreaseQuality(item.quality);
  item.quality =
    item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;
  return item;
};

export const updateNormalItem = (item: Item) => {
  item = updateBasic(item);
  item.sellIn -= 1;
  return item;
};

export const updateAgedBrie = (item: Item) => {
  item.quality = increaseQuality(item.quality);
  item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
  item.sellIn -= 1;
  return item;
};

const increaseBackstagePassesQuality = (item: Item): number => {
  let quality = increaseQuality(item.quality);
  quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
  quality = item.sellIn < 6 ? increaseQuality(quality) : quality;
  return quality;
};
export const updateBackstagePasses = (item: Item) => {
  item.quality = item.sellIn <= 0 ? 0 : increaseBackstagePassesQuality(item);
  item.sellIn -= 1;
  return item;
};

export const updateSulfuras = (item: Item) => {
  item.quality = 80;
  return item;
};
