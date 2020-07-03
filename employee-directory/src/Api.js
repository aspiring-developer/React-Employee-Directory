import axios from 'axios';
const BASEURL = "https://randomuser.me/api/?results=id,picture,name,phone,email,dob";
export default {
  result: function() {
return axios.get(BASEURL);
  }
};
// export default Api;