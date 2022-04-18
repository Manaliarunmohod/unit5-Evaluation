import {useState} from "react";
import React from "react";
import axios from "axios";

export function AddStudent({toggleDisplay}) {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: "",
        tenth_score: "",
        twelth_score: "",
        preferred_branch: ""
    })

    function handleChang(e) {
        let {value, className} = e.target;
        
        setFormData({...formData, [className]:value})
    }

    function handlSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:8080/students", formData).then(toggleDisplay());
    }




    return (
        <div className="addHouseContainer">
        <form onSubmit={handlSubmit}>
          <label>First Name</label>
          <input onChange={handleChang} type="text" className="first_name"  value={formData.first_name}  />
          <br />
          <label>Last Name</label>
          <input onChange={handleChang} value={formData.last_name} className="last_name" type="text"  required />
          <br />
          <label>Email</label>
          <input onChange={handleChang} value={formData.email} className="email" type="text"  required />
          <br />
          <label>Gender</label>
          <input onChange={handleChang} value={formData.gender} className="gender" type="text"  required />
          <br />
          <label>Age</label>
          <input onChange={handleChang} value={formData.age} className="age" type="text"  required />
          <br />
          <label>Tenth Score</label>
          <input onChange={handleChang} value={formData.tenth_score} className="tenth_score" type="text"/>

          <br />
          <label>Twelveth Score</label>
          <input onChange={handleChang} value={formData.twelth_score} className="twelth_score" type="text"/>
          <br />
          <label>Preferred Branch</label>
          <input onChange={handleChang} value={formData.preferred_branch} type="text" className="preferred_branch"  required />

         
          <input className="submitBtn" type="submit"/>
        </form>
      </div>
    )
}
