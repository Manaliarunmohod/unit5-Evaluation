import { useState } from "react";
export const Rentals = ({ data, setdata }) => {
  const [search, setsearch] = useState("");

  const getHome = () => {
    setTimeout(() => {
      let filter = data.filter((e) => e.address === search);
      setdata([...filter]);
    }, 3000);
  };
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button
          onClick={() => {
            let sorted = data.sort((a, b) => a.id - b.id);
            setdata([...sorted]);
          }}
          className="sortById"
        >
          Sort by ID
        </button>
        <button
          onClick={() => {
            let sorted = data.sort((a, b) => a.rent - b.rent);
            setdata([...sorted]);
          }}
          className="sortByRentAsc"
        >
          Rent Low to high
        </button>
        <button
          onClick={() => {
            let sorted = data.sort((a, b) => b.rent - a.rent);
            setdata([...sorted]);
          }}
          className="sortByRentDesc"
        >
          Rent High to low
        </button>
        <button
          onClick={() => {
            let sorted = data.sort((a, b) => a.areaCode - b.areaCode);
            setdata([...sorted]);
          }}
          className="sortByAreaAsc"
        >
          Area Low to high
        </button>
        <button
          onClick={() => {
            let sorted = data.sort((a, b) => b.areaCode - a.areaCode);
            setdata([...sorted]);
          }}
          className="sortByAreaDesc"
        >
          Area High to Low
        </button>
      </div>
      <input
        onChange={(e) => {
          setsearch(e.target.value);
          getHome();
        }}
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">{house.preferredTenant}</td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
