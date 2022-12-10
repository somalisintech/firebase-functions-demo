import ApiClient from '../utils/apiClient';

const { get } = ApiClient.getInstance();

export const fetchCatFact = () => get('https://catfact.ninja/fact');
