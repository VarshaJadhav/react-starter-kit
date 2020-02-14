import SampleService from '../../services/sample-services'
const SampleMiddleware = store => {
  return next => action => next(action)
   {
    //  if(action.type === 'GET_SAMPLE_REQUEST') {
    //     SampleService.getSampleList().then(data=>{
    //      store.dispatch(sampleListSuccess(data))
    //     })
    //     .catch(e=>{
    //       store.dispatch(sampleInfoError)
    //     })
    //  }

   }
}

export default SampleMiddleware
