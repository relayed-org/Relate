import axios from 'axios';

export function fetchData() {
  const filePath = '/user/profile.json';

  return axios.get(filePath).then((response) => {
    return response.data;

  }).catch((error) => {
    console.error('Error fetching server data:', error);
    throw error;
  });
}
