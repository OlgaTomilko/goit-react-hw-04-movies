import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "53150836486af442234b715d881b9b12"; //Ключ API (v3 auth)

//api.themoviedb.org/3/trending/all/day?api_key=53150836486af442234b715d881b9b12
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiI1MzE1MDgzNjQ4NmFmNDQyMjM0YjcxNWQ4ODFiOWIxMiIsInN1YiI6IjYwMTE5YmViNDZmMzU0MDAzZWI1ZDc2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .izGKXB8BaqDJ7UN0EkfTgi5sRJAxA2vz6ssUfHHVOUA

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY };

const getMovies = async (path, query, page) => {
  try {
    const { data } = await axios.get(path, {
      params: { query: query, page: page },
    });
    // console.log(data.results);
    return data;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export default { getMovies };
