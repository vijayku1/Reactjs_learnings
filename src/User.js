import './App.css';
//import React,{useEffect,useState } from 'react';
//import React from "react";
// .............passing props................//
/*function User(props){
    return (
        <div style={{backgroundColor: "skyblue"}}>
            <h1>Hello {props.name} </h1>
            <h2>Email: {props.Email}</h2>
            <h4>Address: {props.other.address} {props.other.mobile} </h4>
        </div>
       
    );
}*/
/*
function User(props){
    return (
        <div>
            <h1>Hello: {props.name}</h1>
           
        </div>
    );
}
*/
/*

//....................function passing as a props......................//
function User(props){
    return (
        <div>
            <h1>user component</h1>
            <button onClick={props.data}>call data fuction</button>
        </div>
    );
}
*/
/*

//..........................Render method on props...........................//
class User extends React.Component{
    render(){
        console.warn("Render Method",this.props)
        return(
            <div>User component {this.props.data} </div>
        )
    }
}
*/


//.......................Render Method on states...........................//
/*
class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:"vijay@gmail.com"
        }
    }
    render(){
        console.warn("Render Method",this.state.email)
        return(
            <div>
            <h1>User Component</h1>
            <button onClick={()=>this.setState({email:"victor@gmailcom"})} >Update email</button>
             </div>
        )
    }
}
*/
//........................componentWillUnmount()...........................//
//it will always work, doesn'nt what the component is funtional or class , but componentWillUnmount must be in the class component
/*
class User extends React.Component{
    componentWillUnmount(){
        console.warn("componentWillUnmount called")
    }
    render(){
        return (
            <div className="App">
               <h1>User component</h1>
            </div>
        )
    }
}
*/
/*
function User(props){
useEffect(() => {
   alert("count is: "+props.count)
}, [props.count])
    return (
        <div className="App">
          <h1>Count Props: {props.count}</h1>
          <h1>Data Props: {props.data}</h1>
        </div>
    );
}
*/

//.......using the map function on the component..........//
/*
function User(props){
    return (
        <div>
        <span>User {props.data.name } </span>
        <span>{props.data.email } </span>
        
        </div>
        
    );
}
*/

//............sending data child to parent..................//
/*function User(props){
    const data="viaykumar"
    return (
        <div>
          <h2>User name {props.name} </h2>
        <button onClick={()=>props.alert(data)}>click me</button>
        </div>
        
    )
}*/

//....................forwardRef..........................//

import React,{forwardRef} from 'react';
function User(props,ref){
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(User);