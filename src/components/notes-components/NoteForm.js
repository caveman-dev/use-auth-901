import React,{useState} from 'react'
import axios from 'axios'
const NotesForm=(props)=>{
    const {handleEvery}=props
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
       if (title){
        const formData={
            title:title,
            body:body
        }
        axios.post("https://dct-user-auth.herokuapp.com/api/notes",formData,{
            headers:{'x-auth':localStorage.getItem('token')}})
            .then((response)=>{
            alert("Note Added")
            handleEvery(response.data)

        })
        .catch((err)=>{
            alert(err.message)
        })
        setTitle('')
        setBody('')
       }
       else{
           alert("Title cannot be empty")
       }
       
        
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    const handleBodyChange=(e)=>{
        setBody(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                <label>Title</label><br/>
                <input class="form-control" type="text" onChange={handleTitleChange} value={title}/><br/>
                <label>Body</label><br/>
                <textarea class="form-control" value={body} onChange={handleBodyChange}/><br/>
                <input class="btn btn-dark" type="submit" value="save"/>
                </div>
            </form>
        </div>
    )
}
export default NotesForm