import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getColors = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/colors.json`)
    .then((res) => {
      let colors = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          colors.push(res.data[key]);
          colors.sort(function(a, b){return a.order - b.order});

        });
      }
      resolve(colors);
    })
    .catch(err => reject(err));
});


export default {
  getColors,
}