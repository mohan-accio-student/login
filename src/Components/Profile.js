import { useEffect,useContext, useState} from "react";
import axios from 'axios';
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Profile=()=>{
    var navigate=useNavigate();
    var{details,setDetails}=useContext(userContext);
    const[data,setData]=useState({})
    function handleLogout(){
       navigate("/");
       setData({});
       setDetails({});
    }
    useEffect(()=>{
     if(details.id===""){
        alert("pls do login first")
        navigate("/");
        return
     }
      axios.get(`https://dummyjson.com/users/${details.id}`)
      .then((res)=>{
        setData(res.data)
        console.log(res.data);
    }) 
    })
    return(
        <div style={{backgroundColor:"black"}}>
            {
                data &&
                (
                    <div>
                        <img style={{border:"2px solid green",width:"200px", marginTop:"20px"}}src={data.image}></img>
            <h1>Profile</h1>
            <div className="body">
            <h2>First Name : {data.firstName}</h2><br/>
            <h2>Last Name : {data.lastName}</h2><br/>
            <h2>Email : {data.email}</h2><br/>
            <h2>Phone : {data.phone}</h2><br/>
            <h2>University: {data.university}</h2><br/>
            <h2>Age : {data.age}</h2><br/>
            <h2>Height : {data.height}</h2><br/>
            <h2>Weight : {data.weight}</h2><br/>
            <button onClick={handleLogout}>Logout</button>
            </div>
                    </div>
                )
            }            
        </div>
    )
}
export default Profile;