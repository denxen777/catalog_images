import axios from 'axios';

const URL =
  'https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&';

export const api = axios.create({
  baseURL: URL,
});
