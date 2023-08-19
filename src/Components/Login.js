import { useState,useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Login=()=>{
    var{details,setDetails}=useContext(userContext);
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    
    let navigate=useNavigate();
    function handleLogin(){
        if(!name ||!password){
            setError("All fields are mandatory");
            return;
        }
        axios.post('https://dummyjson.com/auth/login',{
    
                "username":`${name}`,
                "password":`${password}`
            }
        )
        .then((res)=>{
            console.log(res.data)
            setName("");
            setPassword("")
            navigate("/profile");
            setDetails({...details,id:res.data.id,token:res.data.token})
            console.log(details)
        })
        .catch(err=>console.log(err))
        
        
    }
    return(
        <>
           <h1>Login</h1>
           <div className="body">
             <input type="text" placeholder="Enter UserName" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
             <input type="text" placeholder="Enter UserPassword" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
             <button onClick={handleLogin}>Login</button>
             {
                error&&<p style={{color:"red",margin:"10px"}}>{error}</p>
             }
           </div>
        </>
    )
}
export default Login;