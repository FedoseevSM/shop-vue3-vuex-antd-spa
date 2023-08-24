import { API } from "../config/consts";

export const getItemsAll = () => {
  return fetch(API.ITEMS);
};
