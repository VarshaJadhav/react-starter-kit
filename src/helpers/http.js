import axios from 'axios'

//class for HTTP client
class HttpClient {
  constructor () {
    this.baseUrl = 'baseurl'
    this.header = {
      'Content-Type': 'application/json'
    }
  }

  createEndPoint (endpoint) {
    return `${this.baseUrl}/${endpoint}`
  }

  get (endpoint, params) {
    return axios.get(this.createEndPoint(endpoint),{
      headers: this.header,
      params
     })
  }

  post (endpoint, payload, header) {
    return axios.post(
      this.createEndPoint(endpoint),
      payload,
     { headers: this.header }
    )
  }
}

export default new HttpClient()
