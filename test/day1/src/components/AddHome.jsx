import { useState } from "react";

export const AddHome = ({getData}) => {
    const [houseData, sethouseData] = useState({
        name: "",
        ownerName: "",
        address : "",
        areaCode: "",
        rent:"",
        preferredTenant : "",
        image: ""
    });

    const handleHouseData = (e) => {
      const {id, value} = e.target;
      if(id === "bachelor" && e.target.checked){
      return sethouseData({
          ...houseData,
          preferredTenant: "bachelor"
      })
      }
      else if(id === "married" && e.target.checked){
        return sethouseData({
            ...houseData,
            preferredTenant: "married"
        });
      }
      else{
          return sethouseData({
            ...houseData,
            [id] : value
        });
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/houses", {
            method: "POST",
            body: JSON.stringify(houseData),
            headers : {
                "content-type": "application/json"
            }
        }).then(alert("Data Saved Successfully")).then(sethouseData({
            name: "",
            ownerName: "",
            address : "",
            areaCode: "",
            rent:"",
            preferredTenant : "",
            image: ""
        })).then(() => {getData()})
    }
  return (
    <div className="addHouseContainer">
      <form onSubmit = {handleSubmit}>
        <label>name</label>
        <input onChange = {handleHouseData} id = "name" type="text" className="name"  required />
        <br />
        <label>ownerName</label>
        <input onChange = {handleHouseData} id = "ownerName"  type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input onChange = {handleHouseData} id = "address"  type="text" className="address" required />
        <br />
        <label>areaCode</label>   
        <input onChange = {handleHouseData} id = "areaCode"  type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange = {handleHouseData} id = "rent"  type="text" className="rent" required />
        <br/>
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange = {handleHouseData} id = "bachelor"  type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange = {handleHouseData} id = "married"  type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input onChange = {handleHouseData} id = "image"  type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
