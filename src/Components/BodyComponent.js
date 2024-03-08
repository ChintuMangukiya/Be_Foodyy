import RastaurantCard from "./Ras.js";
import RastaurantCard2 from "./Ras2.js";
//import resList1 from "../ResLists/resList1.js";
import { useEffect, useState } from "react";
import React from "react";
import Ras_Shimmer from "../Components/RasShimmer.js";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import SWIGGY_API from "../Constants/APIs/Swiggy_API.js";

const BodyComponent = () => {
  //usign state variable for updating and re-rendering the BodyComponent.......

  const [topbtn, settopbtn] = useState("Top Rated Rastaurants");


  const [search, setsearch] = useState("notsearched");
  const [cls, setcls] = useState("");

  const [searchText, setSearchText] = useState("  ");

  useEffect(() => {
    fetchdata1();
  },[]);


  const [resList, setresl] = useState([]);
  const [resList1, setresl1] = useState([]);
  const [resLis1, setresList1] = useState([]);
  const [resLis, setresList] = useState([]);

  const fetchdata1 = async () => {
    const dt = await fetch( SWIGGY_API );
    const json1 = await dt.json();

    setresl(
      json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setresList(
      json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setresl1(
      json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setresList1(
      json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };





  if (resLis.length === 0 && resLis1.length === 0) 
  {
    return (
      <div>
        <div className="headersh"></div>
      <div
        className="body"
        onMouseDown={() => {
          if (cls === "🗙" && searchText.replace(/ /g, "") === "") {
            setcls("");
            setsearch("notsearched");
          }
        }}
      >
        <div className="ser">
          {" "}
          <input
            className="Search-Barsh"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onClick={() => {
              setcls("🗙");
            }}
          ></input>
          <button
            className="Search-buttonsh"
            onClick={() => {
              if (searchText.toLowerCase().replace(/ /g, "").replace(/'/g, "") == "all") {
                setresList1(resList1);
                setresList(resList);
              } else {
                if (topbtn === "Top Rated Rastaurants") {
                  const filteredrestrau = resList.filter((dent) =>
                    dent.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  const filteredrestrau1 = resList1.filter((dent1) =>
                    dent1.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  setresList1(filteredrestrau1);
                  setresList(filteredrestrau);
                  setsearch("searched");
                } 
                else {
                 
                  if (topbtn === "Top Rated Rastaurants 🗙") 
                  {
                    setsearch("searched");
                    const filteredrestrau = resList.filter((dent) =>
                      dent.info.name
                        .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                        .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))

                    );
                    const filteredrestrau1 = resList1.filter((dent1) =>
                      dent1.info.name
                        .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                        .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                    );
                    setresList1(
                      filteredrestrau1.filter((dee) => dee.info.avgRating > 4)
                    );
                    setresList(
                      filteredrestrau.filter((dee) => dee.info.avgRating > 4)
                    );
                  }
                }
              }
            }}
          >
             
          </button>
          <span
            id="clsbtn"
            onMouseDown={() => {
              setSearchText("  ");
              setcls("");
              setresList1(resList1);
              setresList(resList);
            }}
          >
            {cls}
          </span>
        </div>
        <div className="filter">
          <button id="nnnnn" className="topRassh"></button>
        </div>
        <div className="Restaurant-Container">
          <div className="Restaurant-Card">
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
            <Ras_Shimmer></Ras_Shimmer>
          </div>
        </div>
      </div>
      </div>
    );
  } 
  else {
    return (
      <div
        className="body"
        onMouseDown={() => {
          if (cls === "🗙" && searchText.replace(/ /g, "") === "") {
            setcls("");
            setsearch("notsearched");
          }
        }}
      >
        <title>BeFoody!</title>
        <div className="ser">
          {" "}
          <input
            className="Search-Bar"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onClick={() => {
              setcls("🗙");
            }}
          ></input>
          <button
            className="Search-button"
            onClick={() => {
              if (searchText.toLowerCase().replace(/ /g, "").replace(/'/g, "") == "all") {
                setresList1(resList1);
                setresList(resList);
              } else {
                if (topbtn === "Top Rated Rastaurants") {
                  const filteredrestrau = resList.filter((dent) =>
                    dent.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  const filteredrestrau1 = resList1.filter((dent1) =>
                    dent1.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  setresList1(filteredrestrau1);
                  setresList(filteredrestrau);
                  setsearch("searched");
                } 
                else {
                 
                  if (topbtn === "Top Rated Rastaurants 🗙") 
                  {
                    setsearch("searched");
                    const filteredrestrau = resList.filter((dent) =>
                      dent.info.name
                        .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                        .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))

                    );
                    const filteredrestrau1 = resList1.filter((dent1) =>
                      dent1.info.name
                        .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                        .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                    );
                    setresList1(
                      filteredrestrau1.filter((dee) => dee.info.avgRating > 4)
                    );
                    setresList(
                      filteredrestrau.filter((dee) => dee.info.avgRating > 4)
                    );
                  }
                }
              }
            }}
          >
            Search
          </button>
          <span
            id="clsbtn"
            onMouseDown={() => {
              setSearchText("  ");
              setcls("");
              setresList1(resList1);
              setresList(resList);
            }}
          >
            {cls}
          </span>
        </div>
        <div className="filter">
          <button
            id="nnnn"
            className="topRas"
            onClick={() => {
              if (search != "searched") {
                if (topbtn === "Top Rated Rastaurants") {
                  settopbtn("Top Rated Rastaurants 🗙");
                  setresList1(
                    resList1.filter((data) => data?.info?.avgRating > 4)
                    );
                  setresList(
                    resList.filter((data) => data?.info?.avgRating > 4)
                  );
                } else {
                  settopbtn("Top Rated Rastaurants");
                  setresList1(resList1);
                  setresList(resList);
                }
              } else {
                if (topbtn === "Top Rated Rastaurants") {
                  settopbtn("Top Rated Rastaurants 🗙");
                  const filteredrestrau = resList.filter((dent) =>
                    dent.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  const filteredrestrau1 = resList1.filter((dent1) =>
                    dent1.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  setresList1(
                    filteredrestrau1.filter((data) => data?.info?.avgRating > 4)
                  );
                  setresList(
                    filteredrestrau.filter((data) => data?.info?.avgRating > 4)
                  );
                } else {
                  settopbtn("Top Rated Rastaurants");
                  const filteredrestrau = resList.filter((dent) =>
                    dent.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  const filteredrestrau1 = resList1.filter((dent1) =>
                    dent1.info.name
                      .toLowerCase().replace(/ /g, "").replace(/'/g, "")
                      .includes(searchText.replace(/ /g, "").replace(/'/g, "").toLowerCase().replace(/ /g, "").replace(/'/g, ""))
                  );
                  setresList1(filteredrestrau1);
                  setresList(filteredrestrau);
                }
              }
            }}
          >
            {topbtn}
          </button>
        </div>
        <div className="Restaurant-Container">
          <div className="Restaurant-Card Restaur">
            
            {
             resLis.map((dat) => (
              
                   <RastaurantCard2 key={dat.info.id} info={dat}></RastaurantCard2>
            ))}
            {resLis1.map((dat) => (
                   <RastaurantCard2 key={dat.info.id} info={dat}></RastaurantCard2>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default BodyComponent;
