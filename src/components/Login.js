import React ,{useState}from 'react'
import axios from 'axios'

const Login=(props)=>{ 
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
       
        email:email,
        password:password
    }
    axios.post("https://dct-user-auth.herokuapp.com/users/login",formData)
        .then((response)=>{
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
             }
            else{
             localStorage.setItem('token',result.token)
             props.history.push("/")
             props.handleAuth()
        }
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
const handleChange=(e)=>{
   if(e.target.name==="email"){
        setEmail(e.target.value)
    }else if(e.target.name==="password"){
        setPassword(e.target.value)
    }
}
return(
<div>
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
     
      <input type="email" placeholder="enter email" value={email} onChange={handleChange} name="email"/><br/>
      <input type="password" placeholder="enter password" value={password} onChange={handleChange} name="password"/><br/>
      <input class="btn btn-dark" type="submit" value="Login"/>
  </form>
</div>
)
}

export default Login;
