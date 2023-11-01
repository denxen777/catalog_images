import axios from 'axios';

export const API_KEY = 'gTJAO48YcpmrADUyo4opy4ES4g7iDBxx';

const URL = `https://api.giphy.com/v1/gifs/random`;

export const api = axios.create({
  baseURL: URL,
});
