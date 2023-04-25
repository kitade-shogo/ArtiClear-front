import axios from 'axios'
const ENDPOINT_URL = 'http://localhost:3100/folder'

const folderApi = {
    async getAll() {
        const result = await axios.get(ENDPOINT_URL)
        return result.data;
    },
    async post(folder) {
        const result = await axios.post(ENDPOINT_URL, folder)
        return result.data;
    },
}