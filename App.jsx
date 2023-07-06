import { useState } from "react"
import "./index.css"

const App = ()=>{
    const color = {
        backgroundColor :"#8e44ad",
        color:"white",
    }
    const cum={
        backgroundColor :"pink",
        color:"orange",
    }
    
    
const [initial,final] = useState(color)
const abdullah = "click me ";
const[first,last] = useState(abdullah);
    


const fun=()=>{
   
    final(cum)
    const raju = "ayyo"
    last(raju);


}
const back = () =>{
final(color);
last("outch");
}
return (<div style={initial} >
    <button onClick={fun} onDoubleClick={back} >{first}</button>
</div>);
}
export default App;