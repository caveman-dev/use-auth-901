import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'

const App=(props)=>{
  const [userLoggedIn,setUserLoggedIn]=useState(false)
  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn)
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])// on page reloads
return(
  <div className="container">
    <h1>User-Authentication</h1>
    <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
  </div>
)
}

export default App;
