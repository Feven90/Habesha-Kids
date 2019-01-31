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
          // console.log(alphabets);

        });
      }
      // const currentUser = parents.find(x => x.currentUser);
      resolve(numbers);
    })
    .catch(err => reject(err));
});

// const postKidRequest = kid => axios.post(`${firebaseUrl}/kids.json`, kid);

// const deleteKid = kidId => axios.delete(`${firebaseUrl}/kids/${kidId}.json`);


export default {
  // postKidRequest,
  getNumbers,
  // deleteKid
}