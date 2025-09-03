import { useState } from "react"

interface EmailFormProp {
    onSubmit : (data:string) => void
}

const EmailForm = ({onSubmit}:EmailFormProp) => {

     const [inputValue,setInputValue] = useState<string>("")

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
      onSubmit(inputValue)
    }

  return (
    <>

    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter you Email..." onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputValue(e.target.value)}/>
        <button>Submit</button>
    </form>
    
      
    </>
  )
}

export default EmailForm
