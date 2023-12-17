import React, { useEffect, useState } from "react";
import img from './img1.png';

export default function TempApp(){
    const [city,setCity] = useState();
    const [search,setSearch] = useState('Delhi');
    useEffect( () => {
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c01703bc18d12523d80b69f7bfc68efa`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    return(<>
        <div className="box align-content-center">
            <div className="inputData text-center" >
                <input
                    type="search"
                    className="inputField text-center"
                    placeholder="Enter city name..."
                    onChange={ (event) =>{
                        setSearch(event.target.value) } } 
                />
            </div>
            {!city ? (<p>No Data Found</p>) : (
                <div>
                    <div className="info">
                        <div className="for-loc">
                            <img className="image" src={img} alt="Location" height='50px' width='50px'/>
                            <h2 className="location text-center mt-5 ">{search}</h2>
                        </div>
                        <br/><br/>
                        <h1 className="temp text-center pt-2">{city.temp} ℃el</h1><br/><br/>
                        <h3 className=" text-center pt-2 text-dark">Min : {city.temp_min} ℃el | Max : {city.temp_max} ℃el</h3>
                    </div>

                    <div className=" wave -one"></div>
                    <div className=" wave -one"></div>
                    <div className=" wave -one"></div>
                </div>
                )
            }            
        </div>
        
    </>)
}