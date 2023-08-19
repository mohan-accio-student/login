import userContext from "./userContext";
import { useState } from "react";
const Provider=(props)=>{
    const[details,setDetails]=useState({
        id:"",
        token:""
    })
    return(
        <userContext.Provider value={{details,setDetails}}>
            {props.children}
        </userContext.Provider>
    )
}
export default Provider;