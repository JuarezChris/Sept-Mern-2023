import React, {useState, useContext} from 'react';
import { itemContext } from '../context/ItemsContext';

const DisplayContext = () => {
    const {itemList, setItemList} = useContext(itemContext)



  return (
    <div>
        {
            itemList.map((item, idx) => (
                <div key={idx}>
                    <p>{item}</p>
                </div>
            ))
        }
        
    </div>
  )
}

export default DisplayContext