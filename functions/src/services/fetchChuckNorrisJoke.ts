import fetch from 'node-fetch';

export const fetchChuckNorrisJoke = () =>
  fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json());
