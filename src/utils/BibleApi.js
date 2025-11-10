import { checkResponse } from "./api";

const getBooks = (bibleVersionID, API_KEY) => {
  return fetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books`,
    {
      method: "GET",
      headers: {
        "api-key": API_KEY,
      },
    }
  )
    .then(checkResponse)
    .then((responseData) => {
      if (!responseData.data) {
        throw new Error("No data in response");
      }
      return responseData.data.map((book) => ({
        name: book.name,
        id: book.id,
        abbreviation: book.abbreviation,
      }));
    });
};

const getChapters = (bibleVersionID, API_KEY, bookId) => {
  return fetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bookId}/chapters`,
    {
      method: "GET",
      headers: {
        "api-key": API_KEY,
      },
    }
  )
    .then(checkResponse)
    .then((responseData) => {
      if (!responseData.data) {
        throw new Error("No data in response");
      }
      return responseData.data.map((chapter) => ({
        id: chapter.id,
        number: chapter.number,
      }));
    });
};

const getChapterVerses = (bibleVersionID, API_KEY, chapterId) => {
  return fetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${chapterId}`,
    {
      method: "GET",
      headers: {
        "api-key": API_KEY,
      },
    }
  )
    .then(checkResponse)
    .then((responseData) => {
      console.log(responseData);
      if (!responseData.data) {
        throw new Error("No data in response");
      }

      return [
        {
          id: responseData.data.id,
          number: responseData.data.number,
          content: responseData.data.content,
          reference: responseData.data.reference,
        },
      ];
    });
};
export { getBooks, getChapters, getChapterVerses };
