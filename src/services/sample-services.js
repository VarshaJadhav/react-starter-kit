import HttpClient from '../helpers/http';

class SampleServices {

 getSampleInfo(query) {
      return HttpClient.get(`sample`)
  }

  getSampleList() {
    return HttpClient.post(`sample/list`,{})
  }

}

export default new SampleServices();