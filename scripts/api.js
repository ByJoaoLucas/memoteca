const URL_Base = 'http://localhost:3000'

const api = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_Base}/pensamentos`)
            return await response.data
        }
        catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }  
    },
    
    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_Base}/pensamentos`, pensamento)
            return await response.data
        }
        catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }  
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_Base}/pensamentos/${id}`)
            return await response.data
        }
        catch {
            alert('Erro ao buscar pensamento por id')
            throw error
        }  
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_Base}/pensamentos/${pensamento.id}`, pensamento)
            return await response.data
        }
        catch {
            alert('Erro ao editar pensamento')
            throw error
        }  
    },

    async excluirPensamento(id) {
        try {
            const response = await axios.delete(`${URL_Base}/pensamentos/${id}`)
        }
        catch {
            alert('Erro ao excluir um  pensamento')
            throw error
        }  
    }
}


export default api;