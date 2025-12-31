import { NASA_BASE_URL, NASA_API_KEY } from "../constants/constants";

export const getPictures = async () => {
  const response = await fetch(`${NASA_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}&count=20`);
  const data = await response.json();
  return data;
};
