import { useState } from "react";
import DisplayWeather from "./components/displayweatherinfo";
import WeatherModal from "./components/weatherModal";

function App() {
  const [city, updateCity] = useState();
  const [renderState, isRender] = useState(true);
  const [data, updateData] = useState();

  const clickHandler = async function(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79cd7fdff29470382c88a6dcd12bb1cf`

    const response = await fetch(url);
    const weatherInfo = await response.json();

    updateData(weatherInfo);
    isRender(false);
  }

  return (
    <>
    {renderState ? <WeatherModal city = {updateCity} onclick = {clickHandler}></WeatherModal> : <DisplayWeather city = {city} data = {data}></DisplayWeather>}
    </>
  )
}

export default App;
