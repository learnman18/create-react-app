import React, { useEffect, useState } from "react";

const MyWeatherApp = (props) =>{

    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ee47526df291bceee8c2c1a840ecfa45`
            const res = await fetch(url);
            const resJson = await res.json();
            // console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi();
    },[search])


    return (
        <>
            <div className="d-flex justify-content-center align-items-center py-5">
                <div className={`p-3 border border-${props.borderClr}`}>
                    <div>
                        <h4>Weather App</h4>
                        <input type="text" className="form-control" onChange={(event)=>{
                            setSearch(event.target.value);
                        }}/>
                        {
                        !city ?  <h3>Not Found</h3>  : 
                        (
                            <>
                                <h5>{search}</h5>
                                <h6>Degree : {city.temp}</h6>
                                <p>Min : {city.temp_min} || max: {city.temp_max}</p>
                            </>
                        )
                        }
                    </div>           
                </div>
            </div>
        </>
    )
}

export default MyWeatherApp;