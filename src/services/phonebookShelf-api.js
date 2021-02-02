import axios from 'axios';

axios.defaults.baseURL = 'http:/localhost:4040';

export async function fetchPhonebook() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
