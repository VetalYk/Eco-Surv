import { useState } from "react";
import Button from "../../elements/Button/Button";
import DropdownMenu from "../../elements/Dropdown/Dropdown";
import { IDropdownItem } from "../../interfaces/drowpdownItem";
import "./style.css";

interface Props {
  breedItems: IDropdownItem[];
  subBreedItems: IDropdownItem[];
  numsOfImages: IDropdownItem[];
  onViewImages(
    breed: string,
    subBreed: string,
    numberOfImages: number | null
  ): void;
  onBreedSelected(breed: string): void;
}

export default function Header({
  breedItems,
  subBreedItems,
  numsOfImages,
  onViewImages,
  onBreedSelected,
}: Props): JSX.Element {
  const [selectedBreed, setBreed] = useState<string>("");
  const [breedInputError, setBreedError] = useState<boolean>(false);
  const [selectedSubBreed, setSubBreed] = useState<string>("");
  const [subBreedInputError, setSubBreedError] = useState<boolean>(false);
  const [selectedNumber, setNumber] = useState<number | null>(null);
  const [selectedNumberError, setSelectedNumberError] =
    useState<boolean>(false);

  const onSelectBreed = (breed: string) => {
    setBreed(breed);
    setBreedError(false);
    onBreedSelected(breed);
    if (breed !== selectedSubBreed) setSubBreed("");
  };
  const onSelectSubBreed = (subBreed: string) => {
    setSubBreed(subBreed);
    setSubBreedError(false);
  };

  const onSelectNumber = (number: number) => {
    setNumber(number);
    setSelectedNumberError(false);
  };

  const onClick = () => {
    const hasSubbreed = subBreedItems.length !== 0 && !selectedSubBreed;
    if (!selectedBreed) setBreedError(true);
    if (!selectedNumber) setSelectedNumberError(true);
    if (hasSubbreed) setSubBreedError(true);

    if (!selectedBreed || !selectedNumber || hasSubbreed) return;

    onViewImages(selectedBreed, selectedSubBreed, selectedNumber);
  };
  return (
    <div className="header">
      <div className="item-wrapper">
        <DropdownMenu
          items={breedItems}
          value={selectedBreed}
          onChange={onSelectBreed}
          isNoSelected={breedInputError}
          label="Breed"
        />
      </div>
      {subBreedItems && subBreedItems.length !== 0 && (
        <div className="item-wrapper">
          <DropdownMenu
            items={subBreedItems}
            value={selectedSubBreed}
            onChange={onSelectSubBreed}
            isNoSelected={subBreedInputError}
            label="Sub breed"
          />
        </div>
      )}
      <div className="item-wrapper">
        <DropdownMenu
          items={numsOfImages}
          value={selectedNumber}
          onChange={onSelectNumber}
          isNoSelected={selectedNumberError}
          label="Number of images"
        />
      </div>
      <div className="item-wrapper">
        <Button label="View images" onClick={onClick} />
      </div>
    </div>
  );
}
