import { IDropdownItem } from "../interfaces/drowpdownItem";

export const prepareData = (data: {}): IDropdownItem[] => {
  const values = Object.keys(data);
  return values.map((value) => {
    return {
      label: value,
      value,
    } as IDropdownItem;
  });
};
