import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Read = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://643241f6d0127730d2cf4776.mockapi.io/fakeapi`)
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData);
      });
  }, []);

  const setID =(id)=>{
    console.log(id)
    localStorage.setItem('ID',id)
  }
  const defaultimage =
    "https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80";
  return (
    <div className="grid lg:grid-cols-4 lg:gap-6 md:grid-cols-2 sm:grid-cols-1 md:gap-4 sm:gap-2  mx-6 my-6 ">
      {apiData.map((data) => {
        return (
          <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={data.id}
          >
            <div className="flex flex-col items-center pt-10 pb-10 relative">
            <Link to="/update">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center absolute top-0 right-0" onClick={()=>setID(data.id)}>
                <span>edit</span>
              </button>
              </Link>
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={data.image}
                alt="Bonnie image"
              />
              <h2>{data.name}</h2>
              <h4>{data.email}</h4>
              <h3>{data.country}</h3>
              {/* <button onClick={(id) => props && props.onClick(id)}>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </button> */}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {data.dob}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
