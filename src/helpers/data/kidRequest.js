import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getKids = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/kids.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      let kids = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          kids.push(res.data[key]);
        });
      }
      // const currentUser = parents.find(x => x.currentUser);
      console.log(kids);
      resolve(kids);
    })
    .catch(err => reject(err));
});

const postKidRequest = kid => axios.post(`${firebaseUrl}/kids.json`, kid);

const deleteKid = kidId => axios.delete(`${firebaseUrl}/kids/${kidId}.json`);

const getSingleKid = kidId => axios.get(`${firebaseUrl}/kids/${kidId}.json`);

const putRequest = (kidId, kid) => axios.put(`${firebaseUrl}/kids/${kidId}.json`, (kid));

const updateScore = (kidId, score) => axios.patch(`${firebaseUrl}/kids/${kidId}.json`, {score});

export default {
  postKidRequest,
  getKids,
  deleteKid,
  putRequest,
  getSingleKid,
  updateScore
}