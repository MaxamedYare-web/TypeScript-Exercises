import { useEffect, useState } from "react"


const useStringStorage = (key:string,initialVal:{language:string,notification:boolean}):[{language:string,notification:boolean},(val:{language:string,notification:boolean})=>void] => {

    const [value,setValue] = useState<{language:string,notification:boolean}>(()=>{
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : initialVal
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]

}

export default useStringStorage
