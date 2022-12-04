import fetch from 'node-fetch';
export const fetchCatFact = () => fetch('https://catfact.ninja/fact').then((response) => response.json());
