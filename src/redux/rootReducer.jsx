import {combineReducers} from 'redux'
import {itemData} from './reducer'
import {itemListData} from './itemReducer'

export default combineReducers(
    { itemData},
    { itemListData }
)