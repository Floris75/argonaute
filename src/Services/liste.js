import api from './api';

const listeArgonaute = {
    getAll: async () => {
        return await api.get('/');
    },
    addOne: async (nom) => {
        return await api.post('/argonaute', nom)
    }
}

export default listeArgonaute