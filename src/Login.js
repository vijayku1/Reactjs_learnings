import React,{useState} from 'react'
function Login(){
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr, setpassErr]=useState(false);
    function loginHandle(e){
        if(user.length<3 || password.length<3){
            alert("fill the correct password")
        }
        else{
            alert("Everything is looks good")
        }
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<4){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
    }
    function passHandler(e){
        let item=e.target.value;
        if(item.length<4){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setPassword(item)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter user Id" onChange={userHandler} /> {userErr?<span>User Not Valid</span>:""}
            <br></br>
            <input type="password" placeholder="Enter the password" onChange={passHandler} /> {passErr?<span>User Not Valid</span>:""}
            <br></br>
            <button type="submit">submit</button>
           </form>
        </div>
    );
}
export default Login;