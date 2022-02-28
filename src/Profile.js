import React,{useState} from 'react'
function Profile(){
    const [loggedIn,setLoggedIn]=useState(2)
    /*
    //this method is not recommended for conditional rendering
    if(loggedIn){
        return (
            <div>
                <h2>Welcome Vijay Kumar</h2>
            </div>
        )
    }
    else{
    return (
        <div>
           <h1>Welcome guest</h1> 
        </div>
    );
    }
    */
   return (
       /* 
       // below are the recommended methods of conditional rendering
       //this is a if else condition
       <div>
           {loggedIn?<h2>Welcome Vijay</h2>:<h2>Welcome guest</h2>}
       </div>
       */
      // 1,2,3 lets use these numbers for the if ,else if and else
      <di>
          {loggedIn==1?<h2>welcome user 1</h2>:loggedIn==2?<h2>welcome user 2</h2>:<h2>welcome user 3</h2>}
      </di>
   );
}
export default Profile;