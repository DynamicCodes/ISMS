import {ADD_ITEM,REMOVE_ITEM} from './constant'

export const addItem = (data) =>{
    console.warn("Action called", data)
    return {
        type:ADD_ITEM,
        data:data
    }
}
export const removeItem = (data) =>{
    console.warn("Remove action", data)
    return {
        type:REMOVE_ITEM,
        data:data
    }
}