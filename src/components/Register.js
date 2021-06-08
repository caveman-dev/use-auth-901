import React ,{useState} from 'react'
import axios from 'axios'

const Register=(props)=>{
    const [username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:username,
            email:email,
            password:password
        }
        axios.post("https://dct-user-auth.herokuapp.com/users/register",formData)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }
                else{
                    console.log('success')
                    props.history.push("/login")
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
    
    const handleChange=(e)=>{
        if(e.target.name ==="username"){
            setUsername(e.target.value)
        }else if(e.target.name==="email"){
            setEmail(e.target.value)
        }else if(e.target.name==="password"){
            setPassword(e.target.value)
        }
    }
return(
  <div>
      <h2>Register with us</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="enter username" value={username} onChange={handleChange} name="username"/><br/>
          <input type="email" placeholder="enter email" value={email} onChange={handleChange} name="email"/><br/>
          <input type="password" placeholder="enter password" value={password} onChange={handleChange} name="password"/><br/>
          <input class="btn btn-dark" type="submit" value="Register"/>
      </form>
  </div>
)
}

export default Register;
