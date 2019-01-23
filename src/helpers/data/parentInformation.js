import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const postRequest = parents => axios.post(`${firebaseUrl}/parents.json`, parents);

export default {
  postRequest
}