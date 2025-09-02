import { useState } from 'react'


function App() {
  const [count, setCount] = useState<number>(0)

  // userData with useState
  const [user,setUser] = useState<{username:string,email:string} | null>(null)

  // interface todo
  interface Todo {
    id: number,
    task: string,
    done: boolean
  }

  const [todoList,setTodoList] = useState<Todo[] | null>(null)

  return (
    <>
     {
      count && <p>{count}</p>
     }
     <button onClick={()=>setCount(count + 1)}>Count</button> <br /><br />
     <button onClick={()=>setUser({username:"MaxamedYare99",email:"maxamedyare@gmail.com"})}>Show UserData</button>
    

     {
      user && <>
      <h1>User Data</h1>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
      <button onClick={()=>setUser(null)}>Clear UserData</button>
      </>
     }

     {/* add todo */}
     <button onClick={()=>setTodoList([
      {id:567-333,task:"today somthing done",done:true},
      {id:333-555,task:"after few mintus i will do another thing i.a",done:false}

     ])}>Add Todo</button>
     

  {
    todoList && <>
    <h1>Todo Lists</h1>
    {
      todoList.map((tod)=>(
      <>
        <ul key={tod.id}>
          <li>ID: {tod.id}</li>
          <li>Title: {tod.task}</li>
          <li>Status: {tod.done ? <span style={{color:"green",fontWeight:"bold"}}>Complated</span> : <span style={{color:"red",fontWeight:"bold"}}>Pending</span>}</li>
        </ul>
        <button onClick={()=>setTodoList(null)}>Remove</button>
      </>
      ))
    }
    
    </>
  }


    </>
  )
}

export default App
