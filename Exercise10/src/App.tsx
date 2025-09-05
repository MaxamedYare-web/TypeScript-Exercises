import type React from "react"
import useNumberStorage from "./Hooks/useNumbet"
import useStringStorage from "./Hooks/useStringStorage"
import { useState } from "react"
import useLocalStorage from './Hooks/useLocalStorage';


function App() {

  // this hook is return only number
  const [numValue,setNumValue] = useNumberStorage("storenum",77)

  // this hook will reaturn object propert one is string and next is boolean
  const [sendMessage,setSendMessage] = useStringStorage("Message",{language:"",notification:false})
  // userInputValue
  const [inputValue,setInputValue] = useState<string>("")

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setInputValue(e.target.value)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
 e.preventDefault()
 setSendMessage({language:inputValue,notification:true})
  }

  // generic hooks
  const [num,setNum] = useLocalStorage<number>("phone",+252610887766)
  const [country,setCountry] = useLocalStorage<{name:string,phone:number,country:string,city:string}>("location",{
    name:"Mohamed",
    phone:+252619888888,
    country:"Somalia",
    city:"Mogadishu"
  })

  return (
    <>
      <h1>number is :{numValue}</h1>
      <button onClick={()=>setNumValue(numValue + 1)}>add num</button>
     <form onSubmit={handleSubmit} action="" method="get">
      <input type="text" placeholder="Enter you message..." onChange={handleChangeInput}/>
      <button>Send Message</button>
     </form>
     <h1>You message</h1>
    {
      sendMessage && <p style={{color:"blueviolet"}}>{sendMessage.language}</p>
    }

    <h1>Generic hooks</h1>
    <p>{num}</p>
    <h1>Generic object location</h1>
    <p>Name: {country.name}</p>
    <p>Phone: {country.phone}</p>
    <p>County: {country.country}</p>
    <p>City: {country.city}</p>
    </>
  )
}

export default App
