import React, { createContext, useContext, useState } from 'react'

const ContextState = createContext();



function ContextProvider({children}) {
    const [favIDS, setFavIDS ] = useState([]);


    const addFavId = (id)=>{
        setFavIDS((curId)=>[...curId,id])
    }
    const removeFavId = (id)=>{
        setFavIDS((curId)=>{
         return  curId.filter((favId)=>favId !== id)
        })
    }



  return (
      <ContextState.Provider
        value={{
            addFavId,
            removeFavId,
            favIDS
        }}
      
      >
         {children}
      </ContextState.Provider>
  )
}

export default ContextProvider
export const useStateContext = ()=>useContext(ContextState)