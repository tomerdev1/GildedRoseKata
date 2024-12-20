import { Item } from "./item";

const isQualityIncreasePossible = (item: Item) => item.quality < 50;
const isQualityDecreasePossible = (item: Item) => item.quality > 0;

export const updateNormalItem = (item: Item) => {
  if (isQualityDecreasePossible(item)) item.quality--;
  item.sellIn--;
  if (item.sellIn < 0 && isQualityDecreasePossible(item)) item.quality--;
};

export const updateAgedBrie = (item: Item) => {
  if (isQualityIncreasePossible(item)) item.quality++;
  item.sellIn--;
  if (item.sellIn < 0 && isQualityIncreasePossible(item)) item.quality++;
};

export const updateBackstagePasses = (item: Item) => {
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

export const updateSulfuras = (item: Item) => {};
