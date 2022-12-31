import axios from 'axios'
const resource = '/api/hotel'
export default {
    index(search = null, size= 8,page= 1) {
        return axios.get(`${resource}`,{
            params:{
                search: search,
                size: size,
                page: page
            }
        });
    },
    show (id) {
        return axios.get(`${resource}/${id}`)
    },
};
