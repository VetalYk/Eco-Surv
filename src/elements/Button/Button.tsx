import { Button as Btn } from "primereact/button";

interface Props {
  label: string;
  onClick(): void;
}
export default function Button({ label, onClick }: Props): JSX.Element {
  return <Btn label={label} onClick={onClick} />;
}
