import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const {
  searchByKeyWordData,
  searchByIdData,
} = require("@/app/lib/placeholder");

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
    console.log({ searchByKeyWord: error?.response?.data });
    //@ts-ignore
    return error?.response?.data;
  }
};

export const searchById = async (Id?: string) => {
  try {
    const response = await axios.get<any>(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&id="${Id}"&key=${process.env.API_KEY}`
    );
    // This removes all the extra newlines between sections
    //@ts-ignore
    const cleanedString = response.items[0].snippet.description.replace(
      /\n\n+/g,
      "\n\n"
    );

    // This joins the cleaned string sections with a single newline
    const finalString = cleanedString.split("\n").join("\n");

    const searchResult = {
      //@ts-ignore
      id: response.items[0].id.videoId,
      //@ts-ignore
      title: response.items[0].snippet.title,
      //@ts-ignore
      description: finalString,
    };

    return searchResult;
  } catch (error) {
    //@ts-ignore
    console.log({ searchById: error?.response?.data });
    //@ts-ignore
    return error?.response?.data;
  }
};

export const staticSearch = async (keyword: string) => {
  return new Promise(
    (resolve, reject) =>
      setTimeout(() => {
        console.log(`/results?search_query=${keyword}`);
        redirect(`/results?search_query=${keyword}`);
      }, 5000) // 5 seconds timeout
  );
};

export const staticSearchByKeyWord = async (keyword: string) => {
  return new Promise(
    (resolve, reject) =>
      setTimeout(
        () =>
          resolve(
            searchByKeyWordData.items.map((data: any) => {
              // This removes all the extra newlines between sections
              //@ts-ignore
              const cleanedString = data.snippet.description.replace(
                /\n\n+/g,
                "\n\n"
              );

              // This joins the cleaned string sections with a single newline
              const finalString = cleanedString.split("\n").join("\n");
              return {
                id: data.id.videoId,
                title: data.snippet.title,
                description: finalString,
              };
            })
          ),
        5000
      ) // 5 seconds timeout
  );
};

export const staticSearchById = (id: string) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const response = searchByIdData.items.map((data: any) => {
        // This removes all the extra newlines between sections
        //@ts-ignore
        const cleanedString = data.snippet.description.replace(
          /\n\n+/g,
          "\n\n"
        );

        // This joins the cleaned string sections with a single newline
        const finalString = cleanedString.split("\n").join("\n");
        return {
          id: data.id,
          title: data.snippet.title,
          description: finalString,
        };
      });

      resolve(response[0]);
    }, 5000)
  ); // 5 seconds timeout
};