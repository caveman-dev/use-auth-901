import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import axios from "axios"

const NoteList=(props)=>{
    const{every,handleEvery}=props
    const [value,setValue]=useState("")
    useEffect(()=>{
        axios.get("https://dct-user-auth.herokuapp.com/api/notes",{
            headers:{'x-auth':localStorage.getItem('token')}})
            .then((response)=>{
                console.log('errrr',response.data)
                setValue(response.data)
            })
           
    },[every])
 
    const handleDelete=(flag)=>{
        const result=window.confirm('are you sure?')
        if(result){
            axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${flag}`,{
                headers:{'x-auth':localStorage.getItem('token')}})
                .then((response)=>{
                    console.log(response.data)
                    handleEvery(response.data)
                })       
    }
    }
    
    return(
        <div>
               {
            value.length===0?(
                <div>
                        <h3>No notes found</h3>
                        <p>Add your first note</p>
                    </div>
                ):(
                    <div>
                    <h1>My Notes-{value.length}</h1>
                    {
                        value.map((ele)=>{
                            return <div key={ele._id}><Link onClick={()=>{swal(ele.title,ele.body)}}  >
                                <p>{ele.title}</p><p>{ele.body}</p></Link> <button class="btn btn-dark" onClick={()=>{
                                   handleDelete(ele._id)
                                }}> Delete</button><hr/></div>
                        })
                    }                
                    </div>
                )
            }
        </div>)
}
export default NoteList