import { useState } from "react"

function Chaiready(){
    let [counter,setCounter]=useState(0)
  
    const clickme=()=>{
        setCounter(counter+1)
 
    }
    const removeme=()=>{
        setCounter(counter-1)
     
    }
    return(
        <div>
         <p>{counter}</p>
  <button onClick={clickme}>Add To cart</button>
 
  <button onClick={removeme}>Remove Cart</button>
        </div>
    )
}




export default Chaiready