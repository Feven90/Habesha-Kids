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

        });
      }
      resolve(alphabets);
    })
    .catch(err => reject(err));
});



export default {
  getAlphabets,
}