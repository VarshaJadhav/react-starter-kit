import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'
import Middlewares from './middlewares';

const Store = createStore(RootReducer, applyMiddleware(...Middlewares))

export const InitialStore = {
  ...Store.getState()
} 
export default Store;