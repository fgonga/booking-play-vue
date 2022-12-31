import axios from 'axios'
const resource = 'api/auth'
export default {
    login(auth) {
        return axios.post(`${resource}/login`,auth);
    },
    search(query) {
        return axios.get(`${resource}/search/${query}`);
    },
    store(unidade) {
        return axios.post(`${resource}`, unidade, {
            config: {
                showToast: true,
                responseToast: {
                    title: 'Operação concluída'
                },
            },
        });
    },
    show(id) {
        return axios.get(`${resource}/${id}`);
    },
    update(payload) {
        const { id } = payload;
        return axios.put(
            `${resource}/${id}`,
            payload,
            {
                config: {
                    showToast: true,
                    responseToast: {
                        title: 'Operação concluída'
                    },
                },
            },
        );
    },
    destroy(id) {
        return axios.delete(`${resource}/${id}`);
    },
};
