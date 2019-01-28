import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getAlphabets = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/alphabets.json`)
    .then((res) => {
      let alphabets = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          alphabets.push(res.data[key]);
          alphabets.sort(function(a, b){return a.order - b.order});
          // console.log(alphabets);

        });
      }
      // const currentUser = parents.find(x => x.currentUser);
      console.log(alphabets);
      resolve(alphabets);
    })
    .catch(err => reject(err));
});

// const postKidRequest = kid => axios.post(`${firebaseUrl}/kids.json`, kid);

// const deleteKid = kidId => axios.delete(`${firebaseUrl}/kids/${kidId}.json`);


export default {
  // postKidRequest,
  getAlphabets,
  // deleteKid
}