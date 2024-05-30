import axios from "axios";

export default  axios.create({
    baseURL : 'https://api.rawg.io/api/' ,
    params : { 
        key: 'cc7e958d526c4d2a9a288bd3e7626ab4'
    }
})