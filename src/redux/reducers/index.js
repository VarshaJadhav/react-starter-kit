import { combineReducers } from 'redux'
import { InitialStore } from '../store'
import SampleReducer from './sample-reducer'

const AppReducer = combineReducers({
  SampleReducer
})

const RootReducer = (state, action) => {
  if(action.type === 'RESET_STORE') {
    return AppReducer(InitialStore, action)
  } else {
    return AppReducer(state, action)
  }
}

export default RootReducer