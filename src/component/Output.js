import React from 'react'

const Output = ({data,setData,edittodo}) => {


const deletehandle=(idx)=>{
    let res=[...data]
    res.splice(idx,1)
    setData(res)
    console.log("id",idx)

}



const list =data.map((ele,index)=>{

return(
<>
<div key={index} className='card'>
    

<h6>Title:{ele.name}</h6>

<button onClick={()=>{deletehandle(index)}} >DELETE</button>
<button onClick={()=>{edittodo(index)}} >Edit</button>

</div>

</>

)


})

  return (
  <>
<h5>task</h5>
{list}
  
  </>
  )
}

export default Output