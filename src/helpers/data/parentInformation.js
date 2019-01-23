import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getParentProfile = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/parents.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const parents = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          parents.push(res.data[key]);
        });
      }
      // const currentUser = parents.find(x => x.currentUser);
      console.log(parents);
      resolve(parents);
    })
    .catch(err => reject(err));
});

const postRequest = (parentsEmail, parentName, parentUid) => axios.post(`${firebaseUrl}/parents.json`, parentsEmail,parentName,parentUid);

export default {
  postRequest,
  getParentProfile
}