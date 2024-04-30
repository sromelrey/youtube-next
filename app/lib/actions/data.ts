import axios from "axios";
export const searchKeyWord = async (keyWord: string) => {
  try {
    const response = await axios.get<any>(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyWord}&key=${process.env.API_KEY}`
    );
    return response.data.items;
  } catch (error) {}
};
