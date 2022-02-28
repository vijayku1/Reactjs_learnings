//import React,{useEffect,useState} from 'react'
//import React from 'react';
//import userEvent from '@testing-library/user-event';
//import React from 'react';
//import React from 'react';
import './App.css';
//import User from './user';
//import User from './User';
//import User from './User';
//import React from 'react'
//import student from './Student.js'
//import Login from './Login';
//import Profile from './Profile.js'
/*
function App() {
  //............useState...........//
/*const [data,setData]=useState(0)
//var da="hey";
function updateData() {
  setData(data+1)
}
  return (
    <div className="App">
        <h1>{data}</h1>
        
        <button onClick={updateData}>click</button>
    </div> 
  );*/

  //..............props..............//
 /* return (
    <div className="App">
      <h1>props in react</h1>
      <User name={"vijay"} Email="vk244227@gmail.com" other={{address:'Delhi',mobile:"64732"}} />
      <User name={"pankaj"} Email="pankajmaithal@gmail.com" other={{address:'Noida',mobile:"37267"}}/> 
    </div>
    */
   
  //..............changing the props..............//
 /* const [names,setName]=useState("vijay")
  return(
        <div className="App">
              <User name={names}/>
            <button onClick={()=>{setName("vijaykumar")}}>Update Name</button>
        </div>
  ); 
  */

  //.............props with class component............//
   
  /*return (
    <div className="App">
        <h1>props in class component</h1>
        <student/>
    </div>
  );
  */

  //............Get input box value...................//
 /*
  const [data,setdata]=useState(null)
 const [print,setprint]=useState(false)
  function getData(val){
      setdata(val.target.value)
      setprint(false)
  }
  return (
    <div className="App">
    {
         print?
         <h1>{data}</h1>
         :null
         }
     
      <input type="text" onChange={getData}/>
      <button onClick={()=>setprint(true)}>Print Data</button>
    </div>
  );
  */

  //................hide,show and Toggle..................//
  /*
  const [status,setStatus]= React.useState(true);
  return (
    <div className="App">
    {
      status?<h1>hello world</h1>:null
    }
    {<button onClick={()=>setStatus(false)}>Hide</button>
    <button onClick={()=>setStatus(true)}>Show</button> }

    <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  ); 
  */

//...................Handling the forms...............................//  
/*
const [name,setName]=useState("");
const [tnc,setTnc]=useState(false);
const [interest,setInterest]=useState("");
function getFormData(e)
{
  console.warn(name,tnc,interest)
  e.preventDefault();               //this is stop the referecing the page which is by default
}

return (
  <div className="App">
      <h1>Handling forms in React</h1>
      <form onSubmit={getFormData} >
        <input type="text" placeholder="Enter the name" onChange={(e)=>setName(e.target.value)} /> <br></br>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>select the option</option>
          <option>Marvel</option>
          <option>Dc comics</option>
        </select> <br></br>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept the terms and condition</span>
        <br></br>
        <br></br>
        <button>submit</button>    
      </form>
  </div>
);
*/

//...................conditional rendenring.............................//
/*
return (
  <div className="App">
    <h1>Conditional Rendering</h1>
    <Profile />
  </div>
);
*/

//..................Basic form Validation.................//
/*
return (
  <div className="App">
      <h1>form validation</h1>
      <Login />
  </div>
);
*/

//................Pass function as props...................//
/*
function getData(){
  alert("hello from app.js")
}
return (
  <div className="App">
      <User data={getData} />
  </div>
);
*/
//}
/*

//..................constructor method..........................//
class App extends React.Component{
 
  render(){
    console.warn("render")
    return (
      <h1>Hello</h1>
    )
  }
  constructor(){
    super();
    console.warn("constructor")
  }
}
*/
/*
//.........................render method on props and states.................//
function App(){
  const [data,setData] = useState("Kumar");
  return(
    <div className="App">
    <h1>Render method in Reacts</h1>
    <User data={data} />
    <button onClick={()=>setData("Vijay")} >Update Name</button>
    </div>
    
  );
}
*/

//......................componentDidMount...................................//
/*
class App extends React.Component{
 constructor(){
   super();
   this.state={
     name:"vijay"
   }
   console.warn("constructor")
 }
 componentDidMount(){
   console.warn("componentDidMount")
 }
  render(){
    console.warn("render")
    return (
      <div className="App">
         <h1>Hello {this.state.name}</h1>
           
         <button onClick={()=>{this.setState({name:"Kumar"})}} >Update Name</button>
      </div>
      
    )
  }

}
*/

//.........................componentDidUpdate...............................//
//Never we did'nt update the component inside the componentDidUpdate because unneccessarily it put the updates in the loop. 
//loop means on every updation it will be called. use get rid off this using the conditions inside it.
// preState and preProps are used to determine the previous value of state and props
// preState and preProps are used generally in API call. for get rid off the redundancy of the data
/*
class App extends React.Component{
  constructor(){
    super();
    this.state={
       count:0
    }
    console.warn("constructor")
  }
  componentDidUpdate(preProps,preState,snapshot){
    console.warn("componentDidUpdate",preState.count,this.state.count)
    if(preState.count===this.state.count){
      alert("data is already exist")
    }
  }
   render(){
     console.warn("render")
     return (
       <div className="App">
          <h1>Hello {this.state.count}</h1>
            
          <button onClick={()=>{this.setState({count:1})}} >Update Name</button>
       </div>
       
     )
   }
 
 }
 */
//.....................shouldComponentUpdate()..............................//
// throught this method use can stop the rendering conditionaly
/*
 class App extends React.Component{
  constructor(){
    super();
    this.state={
       count:0
    }
    console.warn("constructor")
  }
  shouldComponentUpdate(){
   console.warn("shouldComponentUpdate",this.state.count);
   if(this.state.count>4 && this.state.count<10){
     return true;
   }
   return false;
  }
   render(){
     console.warn("render")
     return (
       <div className="App">
          <h1>should component Update {this.state.count}</h1>
            
          <button onClick={()=>{this.setState({count:this.state.count+1})}} >Update counter</button>
       </div>
       
     )
   }
 }
 */

 //.......................componentWillUnmount..............................//
 //generally it is used  for the hide and show the component , in depth basically
 //it used for deletion of the component from the DOM 
//it will always work, doesn'nt what the component is funtional or class , but componentWillUnmount must be in the class component
/* 
class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
    console.warn("constructor")
  }
  componentWillUnmount(){
    console.warn("componentWillUnmount")
  }
   render(){
     console.warn("render")
     return (
       <div className="App">
       {
         this.state.show ? <User />: <h1>child compenont Remove</h1>
       }
          <h1>Hello </h1>
            
          <button onClick={()=>this.setState({show:!this.state.show})} >Toggle the component</button>
       </div>
     )
   }
  }
  */ 

//.............................Hooks......................................//
//.......................................................................//
//With Hooks, we can use class component features in funtional components such as state,
//life cycle , pure component,etc
//identifiction:- basically starts with the use word e.g, useState,useCallback etc
//almost all the life cycle method comes under the useEffect hook 

//..................basic use of useEffect with the states...................//
/*
function App(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.warn("work 1")
  },[])
  
  return (
    <div className="App">
    <h1>useEffect in React {count}</h1>
    <button onClick={()=>setCount(count+1)} >Update Counter</button>

    </div>
  );
}
*/
/*
//.......................useEffect on different states.......................//
function App(){
  const [data,setData]=useState(10);
  const [count,setCount]=useState(100);
  useEffect(()=>{
    alert("use Effect called"+count)
  },[count])                          // whatever the parameter here it will run on that only ,here we have pass [data].
  useEffect(()=>{
    console.warn("use Effect called")
  },[data])
  return (
    <div className="App">
    <h2>Hello count: {count}</h2>
    <h2>Hello data:{data}</h2>
    <button onClick={()=>setCount(count+1)} >Update Count</button>
    <button onClick={()=>setData(data+1)} >Update Data</button>

    </div>
  );
}
*/
/*
//........................useEffect on props...............................//
function App(){
  const [data,setData]=useState(10);
  const [count,setCount]=useState(100);
  return (
    <div className="App">
    <User count={count} data={data}/>
    <button onClick={()=>setCount(count+1)} >Update Count</button>
    <button onClick={()=>setData(data+1)} >Update Data</button>
    </div>
  );
}  
*/

//......................Array List with Map function.........................//
/*
function App(){
//const students=['vijay','pankaj','kuldeep','vinay'];
const students=[{name:"vijay",email:'vk@gmail.com',contact:56745},
{name:"dfjd",email:'djd@gmail.com',contact:3248}]
students.map((item)=>{
  console.warn(item)
});
for(let i=0;i<students.length;i++){
  console.warn("inside for loop:",students[i])
}
  return (
    <div className="App">
        <h1>Handling the Array List with the Map function</h1>
        {
          students.map((data)=>
          <h2>{data.name},{data.email}</h2>
          )
        }
        <table border="1">
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
          </tr>
        {
          students.map((data,index)=>
          <tr key={index}>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
          </tr>
          )
        }
        </tbody>
        </table>
    </div>
  );
}
*/
/*..............................Nested Array list.................................//
function App(){
  const users = [{name:'Vijay',email:'vk@gmail.com',address: [
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"}
  ]},
  {name:'Pankaj',email:'pk@gmail.com',address: [
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"}
  ]},
  {name:'Kuldeep',email:'kk@gmail.com',address: [
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"}
  ]},
  {name:'Vinay',email:'vnk@gmail.com',address: [
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"},
    {H_no:"32",city:"Shamli",country:"India"}
  ]},
]
  return (
    <div className="App">
      <h1>List with nested Array</h1>
      <table border="1">
        <tbody>
        <tr>
          <td>S_no</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          </tr>
          {
            users.map((data,index)=>
            <tr key={(index)}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
              <table border="0">
              <tbody>
              <tr>
                  <td>S_no</td>
                  <td>H_no</td>
                  <td>city</td>
                  <td>country</td>
                </tr>
              
              {
              data.address.map((item,i)=>
              <tr key={(i)} >
                  <td>{i+1}</td>
                  <td>{item.H_no}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  </tr>   
              )
              }
              </tbody>
              </table>
            </td>
           </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );

}
*/
/*
//......................map function on the component....................//
function App(){
  const users = [{name:'Vijay',email:'vk@gmail.com'},
  {name:'Pankaj',email:'pk@gmail.com'},
  {name:'Kuldeep',email:'kk@gmail.com'},
  {name:'Vinay',email:'vnk@gmail.com'},
]
  return (
    <div className='App'>
        <h1>Hellos</h1>
        {
          users.map((items,i)=>
          <User data={items} />
          )
        }
    </div>
  );
}
*/

//.........send data child to parent component..............//
//.......this is also called the Lifting state Up.........//

/*function App(){
  function parentAlert(data){
    alert(data)
  }
  return(
    <div className='App'>
      <h1>Lifting state Up</h1>
      <User alert={parentAlert} />
    </div>
    
  )
}*/

//...........................pure component................//
//this is  basically a feature which used in the class component only
//this is useful in stopping the undesirable re-rendering of the component
//without PureComponent if we update the state without changing the value, after that this will render the component
// React.component does'nt care about the values are changed or not it will render. to avoid this problem we use the 
//pure components, we can use this with the props also, same as like this 
/*import React,{PureComponent} from 'react'
class App extends PureComponent{
  constructor(){
    super();
    this.state={
      count:1
    }
  }
  render(){
    console.warn("check-re-rendering")
    return (
      <div className='App'>
           <h1>Pure component in React {this.state.count}</h1>
           <button onClick={()=>this.setState({count:1})}>update</button>
      </div>
    )
  }
}*/

//....................useMemo Hook.....................//
//PureComponent and useMemo have the same purpose to using to avoid the undesirable re-rendering
//useMemo are used for the functional component only
/*import React,{useState,useMemo} from 'react'
function App(){
  const [count,setCount]= useState(0);
  const [item,setItem]= useState(10);
const multiCountMemo=useMemo(function multiCount(){
    console.warn("multicount")
    return count*5
},[count])
  return (
    <div className='App'>
      <h1>useMemo Hook in react</h1>
      <h2>count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Udate count</button>
      <button onClick={()=>setItem(item+5)}>udate item</button>
    </div>
  )
}*/

//...........................Ref in react js...................//
//this feature manipulate the DOM , and basically react does not say that you directly manipulate the dom
//becouse due to this, it slow down the speed of the application.
//It can forcefully manipulate the DOM. we have to use it as much as less
// this is basically used in the class component, but we can use this in the funtional component with the help of the useRef hook  
/*import React,{createRef} from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.inputRef=createRef();
  }
  componentDidMount(){
    //console.warn(this.inputRef.current.value="100")
  }
  getval() 
  {
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="green"
    this.inputRef.current.style.backgroundColor="skyblue"
  }
  render(){
    return(
      <div className='App'>
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getval()} >check Ref</button>
      </div>
      
    )
  }
}*/

//.....................useRef hook.............................//
/*import React,{useRef} from 'react';
function App(){
  let inputRef=useRef(null)
  function handleinput(){
    console.warn("function is called")
    inputRef.current.focus();
    inputRef.current.style.color="green";
    //inputRef.current.style.display="none"
  }
 
  return (
    <div className='App'>
      <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleinput}>handle input</button>

    </div>
  )
}*/

//...................forwardRef.........................//
//it is basically used when the elements are in the different components
/*import React,{useRef} from 'react';
import User from './User';
function App(){
  let inputRef=useRef(null)
  function useupdate(){
    //inputRef.current.value="1000"
    inputRef.current.focus();
    inputRef.current.style.color="blue"
  }
  return(
    <div className='App'>
       <h1>forwardRef in React</h1>
       <User ref={inputRef}/>
       <button onClick={useupdate }>update </button>
    </div>
  )
}*/

//...................controlled component.................//
//definitely there will the input field in the component or may be a form in which multiple input fields are there.
//Definition :- when we controlled the input fields through the states is called controlled components.
/*import React,{useState} from 'react';
function App(){
  const [val,setVal] = useState("")
    return (
      <div className='App'>
         <h1>controlled component {val}</h1>
         <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
      </div>
    )
}*/

//.................uncontrolled component..................//
//definitely there will the input field in the component or may be a form in which multiple input fields are there.
//ans those fields does not controlled by the react states, it may be controlled by the javascript or directly by the dom.

/*import React,{useRef} from 'react';
function App(){
  let inputRef1 = useRef(null)
  let inputRef2 = useRef(null)
  function submitForm(e){
    e.preventDefault()
    console.warn("input field 1 value :",inputRef1.current.value)
    console.warn("input field 1 value :",inputRef2.current.value)
    let input3=document.getElementById('input3').value
    console.warn("input field 3 value: ",input3)  
  }
  return (
    <div className='App'>
      <h1> uncontrolled compenont</h1>   
      <form onSubmit={submitForm}>
        <input ref={inputRef1}type="text"/> <br/>
        <input ref={inputRef2} type="text"/> <br/>
        <input type="text" id="input3"/> <br/>
        <button>submit</button>
      </form>
    </div>
  )
}*/

//.................High order component(HOC)................//
//A component which takes the component as a props and gives output as a component
//Basically these are used where we have used the same component with some modifications.
/*
import React,{useState} from 'react';
function App(){
  return (
    <div className='App'>
         <h1>High order compenont</h1>
         <Hocblue cmp={Counter} />
         <Hocgreen cmp={Counter} />
         <Hocorange cmp={Counter} />
    </div>
  )
}
function Hocblue(props){
  return (
    <h1 style={{backgroundColor:'skyblue',width:100}}><props.cmp/></h1>
  )
}
function Hocgreen(props){
  return (
    <h1 style={{backgroundColor:'green',width:100}}><props.cmp/></h1>
  )
}
function Hocorange(props){
  return (
    <h1 style={{backgroundColor:'orange',width:100}}><props.cmp/></h1>
  )
}
function Counter(){
  const [count,setcount]=useState(0)
  return (
    <div className='App'>
        <h3>{count}</h3>
        <button onClick={()=>setcount(count+1)}>update</button>
    </div>
  )
}
*/

//...................Routing.............................//
//opening the components as the separate pages on some specific urls are called routing
/*
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
function Home() {
  return (
    <div className='App'>
       <h2>Home</h2>
  <p>this is home page</p>  
    </div> 
    );
}

function About() {
  return (
    <div className='App'>
       <h2>About</h2>
  <p>this is about page</p>  
    </div> 
    );
}
function Contact() {
  return (
    <div className='App'>
       <h2>Contact</h2>
  <p>this is contact page</p>  
    </div> 
    );
}
*/

//...........................Fetch the API call Get Method............................//
//in class component use the this fetching in the componentDidMount() function
//direct fecthing the API is not recommended ,we have to use this in the useEffect
/*
import React,{useEffect, useState} from 'react';
function App(){
  const  [Data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/data").then((res)=>{
      res.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
 console.warn(Data);
  return (
     <div className='App'>
     <h1>Get API call</h1>
     <table border="1px">
       
         <tr>
           <td>Id</td>
           <td>Employee Name</td>
           <td>Employee Age</td>
           <td>Employee Email</td>
         </tr>
         {
          Data.map((item)=>
            <tr>
            <td>{item.name}</td>
           <td>{item.age}</td>
           <td>{item.email}</td>
            </tr>
           )
         }
       
     </table>
     </div>
  );
}

*/
//.........................Post method with API.................................//
/*
import React,{useEffect, useState} from 'react';
function App(){
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [mobile,setmobile]=useState("");
  function saveuser(e){
    console.warn(name,email,mobile)
    let data={name,email,mobile};
    fetch("http://localhost:3000/",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.warn("result",result)
    })
  }
  return (
    <div className='App'>
      <h1>Post API Method</h1>
      <input type="text" value={name} placeholder="Name" onChange={(e)=>(setname(e.target.value))} /> <br/><br/>
      <input type="text" value={email} placeholder="Email" onChange={(e)=>(setemail(e.target.value))}/> <br/><br/>
      <input type="text" value={mobile} placeholder="MobileNo." onChange={(e)=>(setmobile(e.target.value))} /> <br/><br/>
      <button type="button" onClick={saveuser}>Save new User</button>
    </div>
  );
}
*/

//.............................Delete Data with API..............................//
/*
import React,{useEffect, useState} from 'react';
function App(){
  const  [Data,setData]=useState([])
  useEffect(()=>{
    getlist()
  },[])
  function getlist(){
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
      res.json().then((resp)=>{
        setData(resp)
      })
    })
  }
 console.warn(Data);
 function deleterow(id){
     fetch(`http://dummy.restapiexample.com/api/v1/employees${id}`,{method: 'DELETE'})
     .then((result)=>{
       result.json().then((resp)=>{
         console.warn(resp)
         getlist()
       })
     })
 }
  return (
     <div className='App'>
     <h1>Get API call</h1>
     <table border="1px">
       
         <tr>
           <td>Id</td>
           <td>Employee Name</td>
           <td>Employee Salary</td>
           <td>Employee Age</td>
           
         </tr>
         {
          Data.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
           <td>{item.employee_name}</td>
           <td>{item.employee_salary}</td>
           <td>{item.employee_age}</td>
           <td><button onClick={()=>deleterow(item.id)}>Delete</button></td>
            </tr>
           )
         }
       
     </table>
     </div>
  );
}
*/

//.............................pre-filled Form...............................//
/*
import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:5000/data").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setMobile(resp[0].mobile)
        setEmail(resp[0].email)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
        setEmail(item.email)
        setMobile(item.mobile);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,email}
    console.warn("item",item)
    fetch(`http://localhost:4000/data/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div className="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}

*/


export default App;
