import React from 'react'
import QuotesForm from './QuotesForm'
const addNote=(props)=>{
    const {addItem}=props
    const formSubmission=(formData)=>{
        addItem(formData)
    }
    return(
        <div>
            <h2>Add quote component</h2>
            <QuotesForm formSubmission={formSubmission}/>
        </div>
    )
}
export default addNote