import { Dropdown } from "primereact/dropdown";
import { IDropdownItem } from "../../interfaces/drowpdownItem";
import classNames from "classnames";
import "./style.css";

interface Props {
  items: IDropdownItem[];
  value: string | number | null;
  isNoSelected: boolean;
  label: string;
  onChange(arg: string | number): void;
}
export default function DropdownMenu({
  value,
  onChange,
  items,
  isNoSelected,
  label,
}: Props): JSX.Element {
  const onSelected = (e: { value: any }) => {
    onChange(e.value);
  };

  const classes = classNames({
    "dropdown-container": true,
    "value-not-selected": isNoSelected,
  });

  return (
    <div className={classes}>
      <span className="label">{label}</span>
      <Dropdown options={items} value={value} onChange={onSelected} />
    </div>
  );
}
