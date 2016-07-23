import config from '../../config'
const API_ROOT = `http://${config.host}:${config.serverPort}/api/v1`

export const PAGES_ENDPOINT = `${API_ROOT}/pages`
