import React from 'react'
import {Link,Route, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import NoteContainer from './notes-components/NoteContainer'

const NavBar=(props)=>{
    const {userLoggedIn,handleAuth}=props
    return(
        <div>
         <ul class="nav nav-tabs nav justify-content-end">
      <li><Link to='/'>Home &emsp;</Link></li>
      {
          userLoggedIn?(
              <>
              <li  class='nav-item'><Link to="/account">Account&emsp;</Link></li>
              <li class='nav-item'><Link to="/note">My Notes&emsp;</Link></li>
              <li class='nav-item'><Link onClick={()=>{
                  const result=window.confirm("Do you want to Log Out?")
                  localStorage.removeItem('token')
                  handleAuth( )
                  props.history.push('/')
              }}>Logout&nbsp; </Link></li>
              </>
          ):(
            <>
            <li class='nav-item'><Link to='/Register'>Register&emsp;</Link></li>
            <li class='nav-item'><Link to='/Login'>Login&emsp;</Link></li>
            </>
          )
      }
     
    </ul>
    <Route path='/' component={Home} exact={true}></Route>
    <Route path='/Register' component={Register} ></Route>
    <Route path='/Login' render={(props)=>{
        return<Login
        {...props} //react dom sends additional props like history with this
        handleAuth={handleAuth}
        />
    }} ></Route>
    <Route path='/account' component={Account}></Route>
    <Route path='/note' component={NoteContainer}></Route>
        </div>
    )
}
export default withRouter(NavBar) 