import React, { useState } from 'react'

interface contactFormProp {
    onSubmit : (data:{name:string,email:string})=> void
}

const ContactForm = ({onSubmit}:contactFormProp) => {

   

    const [inputValie,setInputValue] = useState<{name:string,email:string}>({
        name: "",
        email: ""

    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value} = e.target 
      setInputValue({
        ...inputValie,
        [name]:value
      })
    }

    const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      onSubmit(inputValie)
    }

  return (
    <>
      <form action="" onSubmit={handleSubmitForm}>
        <input name="name" type="text" placeholder='Enter you Name...' onChange={handleChange}/>
      <input name="email" type="text" placeholder='Enter you Email...' onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </>
  )
}

export default ContactForm
