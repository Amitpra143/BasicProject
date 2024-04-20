import React, { useState } from 'react'
import Input from '../component/Input'
import Output from '../component/Output'

const Home = () => {

const [data,setData]=useState([])
const [edit,setEdit]=useState("")

console.log(edit)


const edittodo=(id)=>{
    console.log("idx",id)
    setEdit(id)

}


  return (
    <>
  <h2>Todo App</h2>
     <Input setData={setData} edit={edit} data={data}/>
     <Output data={data}  setData={setData} edittodo={edittodo}/>
    
    </>
   
  )
}

export default Home