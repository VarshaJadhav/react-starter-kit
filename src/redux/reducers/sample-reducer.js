const SampleInitialState = {
  sample: []
}

const SampleReducer = (state = SampleInitialState, action) => {
  switch(action.type) {
    case 'SAMPLE_ACTION_TYPE':
      return {
        ...state,
        sample: action.sample
      }
    default:
      return state
  }
}

export default SampleReducer
