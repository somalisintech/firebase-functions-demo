import ApiClient from '../utils/apiClient';

const { get } = ApiClient.getInstance();

export const fetchChuckNorrisJoke = () => get('https://api.chucknorris.io/jokes/random');
