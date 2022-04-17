import { AddHome } from "./components/AddHome";
import { Rentals } from "./components/Rentals";
import { useState, useEffect} from "react";


function App() {
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(true);

  const getData = () => {
    fetch("http://localhost:8080/houses").then(res => res.json()).then(value => setdata(value));
  }

  useEffect(() => {
    getData();
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className="App">
    <button onClick = {() => {
      show ? setshow(false) : setshow(true);
    }} className="toggleForm"> Toggle Form
    </button>
      {show ?  <Rentals setdata = {setdata} getData = {getData} data = {data}/> :  <AddHome getData = {getData}/>}
    <br />

  </div>
  )
}

export default App;
