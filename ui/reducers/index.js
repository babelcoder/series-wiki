import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import pages from './pages'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  pages
})
