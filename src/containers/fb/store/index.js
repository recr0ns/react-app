import { createStore } from 'redux'
import facebook from '../reducers'

const store = createStore(facebook);

export default store;