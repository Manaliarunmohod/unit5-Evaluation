import {useState} from "react";
import axios from "axios";

function AddStudent({toggleDisplay}) {

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
        //let {cla}
    }

    function handleSubmit(e) {
        e.preventDefault;

        axios.post("http://localhost:8080/students", formData).then(toggleDisplay());
    }




    return (
<diV></diV>
    )
}


export {AddStudent};