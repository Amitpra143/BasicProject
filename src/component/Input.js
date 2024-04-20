// import React, { useState } from 'react'
import React, {useEffect, useState} from "react" 
const Input = ({setData,edit,data}) => {

const [todo,setTodo]=useState({

 
    name:"",
})


useEffect(()=>{
setTodo(data[edit])
},[edit])

const handlechange=(e)=>{
setTodo({
   
    ...todo,
    [e.target.name]:e.target.value

})
}

const addhandler=()=>{

setData((val)=>{
return  [...val,todo]

    
    
})

setTodo({
  
    name:"",
})

}

  return (
    <>
    
    <div>

<input type='text' value={todo.name} name ="name" placeholder='Add Todo' onChange={handlechange} id="id" />
<button onClick={addhandler}>Add Todo</button>


    </div>
    
    </>
  )
}

export default Input