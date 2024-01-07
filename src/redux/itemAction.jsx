import {ITEM_LIST, ITEM_SEARCH, SET_ITEM_LIST} from './constant'

export const itemList = () =>{
    
    return {
        type:ITEM_LIST,
       
    }
}
export const itemSearch = (query) =>{
    
    return {
        type:ITEM_SEARCH,
        query,
    }
}


/*export const setItemList = (data) =>{
    
    return {
        type:SET_ITEM_LIST,
        data
    }
}*/