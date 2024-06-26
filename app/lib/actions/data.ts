import axios from "axios";


export const searchByKeyWord = async (keyWord?: string) => {
  try {
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
    return {};
  } catch (error) {
    //@ts-ignore
    return error?.response?.data;
  }
};

export const searchById = async (Id?: string) => {
  try {
    const response = await axios.get<any>(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${Id}&key=${process.env.API_KEY}`
    );

    // This removes all the extra newlines between sections
    //@ts-ignore
    const cleanedString = response.data.items[0].snippet.description.replace(
      /\n\n+/g,
      "\n\n"
    );

    // This joins the cleaned string sections with a single newline
    const finalString = cleanedString.split("\n").join("\n");

    const searchResult = {
      //@ts-ignore
      id: response.data.items[0].id,
      //@ts-ignore
      title: response.data.items[0].snippet.title,
      //@ts-ignore
      description: finalString,
    };

    return searchResult;
  } catch (error) {
    //@ts-ignore
    return error?.response?.data;
  }
};

