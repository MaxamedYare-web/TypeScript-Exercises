import AgeForm from "./components/AgeForm"
import ContactForm from "./components/ContactForm"
import EmailForm from "./components/EmailForm"


function App() {
  
  // email data
  const handleSubmitValue = (data:string)=>{
    console.log(data)
  }

  // age data
  const handleAgeValue = (data:number)=>{
    if(data <= 15){
     return console.error("Failed becasue you are young!")
    }
    console.log("Successfully Welcome user")
  }

  // contact form data
  const handleDataContactForm = (data:{name:string,email:string})=>{
   console.log(data)
  }

  return (
    <>
     <EmailForm onSubmit={handleSubmitValue}/>

     <h1>Enter you Age</h1>
     <AgeForm onSubmit={handleAgeValue}/>

     {/* contact form */}
     <h1>Contact Form</h1>
     <ContactForm onSubmit={handleDataContactForm}/>
    </>
  )
}

export default App
