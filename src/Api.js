import axios from 'axios';
// const BASEURL = "https://randomuser.me/api/?results=100,id,picture,name,phone,email,dob";
const BASEURL = "https://randomuser.me/api/?results=20";

export default {
  result: function() {
return axios.get(BASEURL);
  }
};
// export default Api;