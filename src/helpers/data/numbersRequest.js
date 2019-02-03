import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getNumbers = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/numbers.json`)
    .then((res) => {
      let numbers = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          numbers.push(res.data[key]);
          numbers.sort(function(a, b){return a.order - b.order});

        });
      }
      resolve(numbers);
    })
    .catch(err => reject(err));
});


export default {
  getNumbers,
}