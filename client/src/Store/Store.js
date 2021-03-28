import { combineReducers,createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../Reducers/ArticleReducer'
var combined=combineReducers({
    Article: reducer
})

export  const store = createStore(combined, applyMiddleware(thunk))