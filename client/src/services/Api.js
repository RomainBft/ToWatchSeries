import axios from 'axios'
import SecureLS from "secure-ls";
const ls = new SecureLS()

export default () => {
  const token = ls.get('key');
  
  if(token === '' && !token) {
    return axios.create({
      baseURL: process.env.VUE_APP_API_LINK
    });
  } else {
    return axios.create({
      baseURL: process.env.VUE_APP_API_LINK,
      headers: {
        'Authorization': `Bearer ${token.data}`
      }
    });
  }
}