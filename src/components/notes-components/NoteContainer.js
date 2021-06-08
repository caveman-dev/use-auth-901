import React, { useState } from 'react'
import NoteList from './NoteList'
import NoteForm from './NoteForm'


const NoteContainer=(props)=>{
    const[every, setEvery]=useState('')
    const handleEvery=(source)=>{
      setEvery(source)
    }
  return(
      <div>
        <br/>
      <div className="row ">
      <div className="col-md-6" ><NoteList every={every} handleEvery={handleEvery}/></div>
      <div className="col-md-6"><NoteForm handleEvery={handleEvery}/></div>
      </div>
      </div>

  )
}

export default NoteContainer
{/* <QuotesList quotes={quotes} removeItem={removeItem}/>
<AddQuote addItem={addItem} /> */}