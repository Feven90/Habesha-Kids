import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
// const getParentProfile = uid => new Promise((resolve, reject) => {
//   axios
//     .get(`${firebaseUrl}/parents.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((res) => {
//       let parent = '';
//       if (res.data !== null) {
//         Object.keys(res.data).forEach((key) => {
//           res.data[key].id = key;
//           parent = res.data[key];
//         });
//       }
//       // const currentUser = parents.find(x => x.currentUser);
//       console.log(parent);
//       resolve(parent);
//     })
//     .catch(err => reject(err));
// });

const postKidRequest = kid => axios.post(`${firebaseUrl}/kids.json`, kid);

export default {
  postKidRequest,
  // getParentProfile
}