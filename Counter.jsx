import React, { useState } from 'react'

function Counter() {



















const[count,setCount]=useState(0)//state management

    function handleInc(){
setCount(count+1)
// console.log(setCount(count+1))
    }
    function handleDec(){
setCount(count-1)
    }
  return (
      <>
      
      <div>Counter</div>
      <div style={{display:"flex",width:"10%",margin:"auto"}}>


<button onClick={handleInc}>+</button>
<div> {count}</div>
<button onClick={handleDec}>-</button>

    </div>
     
      
      </>
  )
}

export default Counter