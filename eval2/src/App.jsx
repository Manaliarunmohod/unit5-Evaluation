import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";


function App() {

  const [displayForm, setdisplayForm] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=> {
    displayData();
  }, [displayForm]);


  function displayData() {
    axios.get("http://localhost:8080/students").then(res => setData(res.data))
    setData(data);
  }

  return (
    <div className="App">
      <button onClick={ () => {
        setDisplayForm(!displayForm);
      }} className="toggleForm"></button>
    </div>
  );
}

export default App;