//Utility function for calling the random user api
import axios from "axios"

export default {
  getRandomUsers: function() {

    return axios.get("https://randomuser.me/api/")
  }
}
