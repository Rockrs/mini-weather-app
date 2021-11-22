/**
 * This is the main component of the application which decides which component to render based on some values
 * 
 */

import { useState } from "react";
import DisplayWeather from "./components/displayweatherinfo";
import WeatherModal from "./components/weatherModal";

function App() {

  // states that we want to maintain
  const [city, updateCity] = useState();
  const [renderState, isRender] = useState(true);
  const [data, updateData] = useState();

  // event-handler for button Click on 'Search Here' Button
  const clickHandler = async function(){

    // fetch API call to weather API service to get data for particular city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79cd7fdff29470382c88a6dcd12bb1cf`

    const response = await fetch(url);
    const weatherInfo = await response.json();

    //updating states
    updateData(weatherInfo);
    isRender(false);
  }

  // Conditional Rendering based on renderState variable
  // RenderState==true means we to render home-page component(weather modal)
  // RenderState==false means we want to render results component  
  return (
    <>
    {renderState ? <WeatherModal city = {updateCity} onclick = {clickHandler}></WeatherModal> : <DisplayWeather city = {city} data = {data}></DisplayWeather>}
    </>
  )
}

export default App;
