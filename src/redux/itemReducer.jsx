import { ITEM_LIST, SET_ITEM_LIST } from "./constant";

export const itemListData = (data = [], action) => {
  switch (action.type) {
 //sending action data to new array
    case SET_ITEM_LIST:
      console.warn("ITEM LIST condition", action);
      return [...action.data];
    default:
      //
      return data;
  }
};
