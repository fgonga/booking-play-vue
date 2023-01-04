import axios from 'axios'

const resource = '/api/booking'
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
    store(booking) {
        return axios.post(`${resource}`,booking);
    },
};
