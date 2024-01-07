import {ADD_ITEM, REMOVE_ITEM} from './constant'

export const itemData =(data=[],action)=>{

switch(action.type){
    case ADD_ITEM:
        console.warn("ADD_ITEM condition", action)
        return [action.data, ...data];  //sending action data to new array
    case REMOVE_ITEM:
        console.warn("REMOVE_ITEM condition", action)
        data.length = data.length ?data.lenght-1:[];
        return [...data];    
    default:
            //
        return []; 
}
}