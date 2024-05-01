import axios from "axios";
const { snippetResponse } = require("../placeholder");

export const searchByKeyWord = async (keyWord?: string) => {
  try {
    console.log(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyWord}&key=${process.env.API_KEY}`
    );
    const response = await axios.get<any>(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyWord}&key=${process.env.API_KEY}`
    );
    const searchResult = response.data.items.map((item: any) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
      };
    });
    return searchResult;
  } catch (error) {
    //@ts-ignore
    console.log(error?.response?.data);
    //@ts-ignore
    throw new Error(`${error?.response?.data.error?.message}`);
  }
};

export const getPreloadData = () => {
  const response = snippetResponse;

  return response.items;
};