/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { getBreeds, getImages, getSubBreed } from "./services/api";
import { IDropdownItem } from "./interfaces/drowpdownItem";
import { prepareData } from "./helpers/main";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ImagesList from "./components/ImagesList/ImagesList";

const NumbersOfImages: IDropdownItem[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
];

function App() {
  const [breeds, setBreeds] = useState<IDropdownItem[]>([]);
  const [subBreeds, setSubBreeds] = useState<IDropdownItem[]>([]);
  const [numsOfImages, setNums] = useState<IDropdownItem[]>(NumbersOfImages);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getBreeds();
    const breeds = prepareData(data);
    setBreeds(breeds);
  };

  const onBreedSelected = async (breed: string) => {
    const data = await getSubBreed(breed);
    setSubBreeds(data);
  };

  const onViewImages = async (
    breed: string,
    subBreed: string,
    numberOfImages: number
  ) => {
    const images = await getImages({ breed, subBreed, numberOfImages });
    setImages(images);
  };
  return (
    <div className="App">
      <Header
        breedItems={breeds}
        numsOfImages={numsOfImages}
        subBreedItems={subBreeds}
        onBreedSelected={onBreedSelected}
        onViewImages={onViewImages}
      />
      <ImagesList images={images} />
    </div>
  );
}

export default App;
