import { addItem, removeItem } from '../redux/action';
import { useDispatch } from 'react-redux'
import { itemList } from '../redux/itemAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';


function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.itemListData);
  console.warn("data in home component from saga", data);
  useEffect(()=>{
    dispatch(itemList())
  },[])
 
  return (
    <div>
      <div>
      <button onClick={() => dispatch(addItem(product))}>Add item</button>
    </div>
    <div>
    <button onClick={() => dispatch(removeItem(product))}>Remove itwm</button>
    </div>
    <div>
    <button onClick={() => dispatch(addItem(product))}>Update item</button>
    </div>
    {/* below button for itemaction button call */}
    <div>
    <button onClick={() => dispatch(itemList())}>show item list</button>
    </div>
    
    <div className='item-container'>
      {
        data?.map((item)=><div className='data-item'>
          
            
            <div>Name : {item.id} </div>
            <div>color : {item.color} </div>
           
          </div>  ) 
      }

    </div>

    </div>
  );
}

export default Home;