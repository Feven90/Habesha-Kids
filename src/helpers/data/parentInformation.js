import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const postRequest = (parentsEmail, parentName, parentUid) => axios.post(`${firebaseUrl}/parents.json`, parentsEmail,parentName,parentUid);

export default {
  postRequest
}