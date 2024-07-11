import axios from "axios";



const fetchData = async (apiKey, apiUrl) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;


