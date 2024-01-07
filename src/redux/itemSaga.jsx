import {takeEvery,put} from 'redux-saga/effects'
import { ITEM_LIST, ITEM_SEARCH, SET_ITEM_LIST } from './constant';

function* getItems(){
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    console.warn("action called", data)
    yield put({type:SET_ITEM_LIST,data})
}
function* searchItems(data){
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action called", result)
    yield put({type:SET_ITEM_LIST,data:result})
}

function* itemSaga()
{
yield takeEvery(ITEM_LIST, getItems)
yield takeEvery(ITEM_SEARCH, searchItems)
}
export default itemSaga;

// https://jsonplaceholder.typicode.com/posts
//https://api.restful-api.dev/objects