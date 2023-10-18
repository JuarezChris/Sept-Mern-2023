import {createContext, useState} from 'react'

export const itemContext = createContext()

export const ItemContextProvider = (props) => {
    // Set up our state
    const [itemList, setItemList] = useState(['Apple', 'Water Bottles', 'Cereal'])
    return (
        // return ItemContextProvider with state
        <itemContext.Provider value={{
            itemList,
            setItemList
        }}>
            {props.children}
        </itemContext.Provider>
    )
}