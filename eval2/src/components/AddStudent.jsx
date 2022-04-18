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

    function handleChange(e) {
        let {value, className} = e.target;
        
        setFormData({...formData, [className]:value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:8080/students", formData).then(toggleDisplay());
    }




    return (
        <div className="addHouseContainer">
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input onChange={handleChange} type="text" className="first_name"  value={formData.first_name}  />
          <br />
          <label>Last Name</label>
          <input onChange={handleChange} value={formData.last_name} className="last_name" type="text"  required />
          <br />
          <label>Email</label>
          <input onChange={handleChange} value={formData.email} className="email" type="text"  required />
          <br />
          <label>Gender</label>
          <input onChange={handleChange} value={formData.gender} className="gender" type="text"  required />
          <br />
          <label>Age</label>
          <input onChange={handleChange} value={formData.age} className="age" type="text"  required />
          <br />
          <label>Tenth Score</label>
          <input onChange={handleChange} value={formData.tenth_score} className="tenth_score" type="text"/>

          <br />
          <label>Twelvth Score</label>
          <input onChange={handleChange} value={formData.twelth_score} className="twelth_score" type="text"/>
          <br />
          <label>Preferred Barnch</label>
          <input onChange={handleChange} value={formData.preferred_branch} type="text" className="preferred_branch"  required />

         
          <input className="submitBtn" type="submit"/>
        </form>
      </div>
    )
}
