import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";


function App() {

  const [displayForm, setDisplayForm] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=> {
    displayData();
  }, [displayForm]);


  function displayData() {
    axios.get("http://localhost:8080/students").then(res => setData(res.data))
    setData(data);
  }

  function toggleDisplay() {
    setDisplayForm(!displayForm);
  }

  return (
    <div className="App">
      <button onClick={ () => {
        setDisplayForm(!displayForm);
      }} className="toggleForm"> {displayForm? "Show Data":"Show Form" } </button>

      {displayForm? <AddStudent toggleDisplay={toggleDisplay} />:< ShowStudent data={data} setData={setData} />}
    </div>
  );
}

export default App;