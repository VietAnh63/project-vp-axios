import {combineReducers} from 'redux'
import DataAPI from './DataAPI'
import Like from './Like'
import Arrsttlike from './Arrsttlike'
import Arrview from './Arrview'
import Comment from './Comment'
var reducer = combineReducers({
     dataAPI : DataAPI,
     like: Like,
     sttlike: Arrsttlike,
     arrview: Arrview,
     comment: Comment
})

export default reducer