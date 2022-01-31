import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '6c83abdbddmsh9b7be3a9f2aee9ap13d4f9jsneb96d760e9d6'
    }
  });

  return data;
}