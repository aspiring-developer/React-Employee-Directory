import axios from 'axios';
const BASEURL = "https://randomuser.me/api/?results=id,picture,name,phone,email,dob";
export default {
  search: function(query) {
return axios.get(BASEURL + query);
  }
};
// export default Api;