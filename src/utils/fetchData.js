export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ad2b4e9bcbmsh3231b6d464514adp1080c3jsnc53ae730a800",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ad2b4e9bcbmsh3231b6d464514adp1080c3jsnc53ae730a800",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
