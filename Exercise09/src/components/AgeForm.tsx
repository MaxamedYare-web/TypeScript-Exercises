import React, { useState } from 'react'

interface ageFormProp {
    onSubmit: (data:number) => void
}

const AgeForm = ({onSubmit}:ageFormProp) => {

 const [ageInput,setAgeForm] = useState<number>(0)

 
 const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    onSubmit(ageInput)
 }

 const handleChangeNumber = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setAgeForm(Number(e.target.value))
 }


  return (
    <>

    <form action="" onSubmit={handleSubmitForm}>
        <input type="number" placeholder='Enter You Age' onChange={handleChangeNumber}/>
        <button>Submit</button>
    </form>
      
    </>
  )
}

export default AgeForm
