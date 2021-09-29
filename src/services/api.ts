import Axios from "axios";

export const getBreeds = async (): Promise<any> => {
  const resp = await Axios.get("https://dog.ceo/api/breeds/list/all");
  return resp.data.message;
};

export const getSubBreed = async (breed: string): Promise<any> => {
  const resp = await Axios.get(`https://dog.ceo/api/breed/${breed}/list`);
  return resp.data.message;
};

export interface GetImagesProps {
  breed: string;
  subBreed?: string;
  numberOfImages: number;
}

export const getImages = async ({
  breed,
  subBreed,
  numberOfImages,
}: GetImagesProps): Promise<any> => {
  const urlByBreed = `https://dog.ceo/api/breed/${breed}/images/random/${numberOfImages}`;
  const urlBySubBreed = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/${numberOfImages}`;
  const url = subBreed ? urlBySubBreed : urlByBreed;
  const resp = await Axios.get(url);
  return resp.data.message;
};
