/**
 * This component renders results of the Search task
 * DisplayWeather function receives props as city and weather data Object from App component.
 * Different parameters are extracted from weather data and UI is updated.
 */

import styled from "styled-components";
import logos from "../logos-images/image_index";
import humidity from "../logos-images/humidity.svg";
import pressure from "../logos-images/pressure.svg";

const Outerdiv = styled.div`
  background: linear-gradient(papayawhip, white);
  height: 55vh;
  width: 400px;
  margin: 150px auto;
  border-radius: 50px;
  text-align: center;
  border : 2px solid green;

  h1 {
    margin: 2.5rem auto;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform : uppercase;
    // border: 2px solid red;
  }
  .weather-info {
    display: flex;
    justify-content: space-between;
    // border: 2px solid red;
    margin: 1rem 3rem;
    width: 300px;
  }

  .temperature {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 1rem 0;
    margin: auto;
  }

  .weather-desc {
    font-size: 1.2rem;
    font-weight: 400;
    margin: auto;
  }

  .weather-parameters {
    display: flex;
    justify-content: space-between;
    // border : 2px solid red;
    margin: 2rem 1rem;
    padding: 1rem 1rem;
  }

  .parameters {
    font-size: 1rem;
    letter-spacing: 2px;
    color:#d5a316;
  }
`;

function DisplayWeather(props) {
  const { city, data } = props;

  const weatherDescription = data.weather[0].main;
  const isDay = data.weather[0].icon.includes("d");

  let logo;
  if (
    weatherDescription === "Clear" ||
    weatherDescription === "Rain" ||
    weatherDescription === "Clouds"
  ) {
    if (isDay) {
      logo = logos["d"][weatherDescription];
    } else {
      logo = logos["n"][weatherDescription];
    }
  } else {
    logo = logos[weatherDescription];
  }

  return (
    <Outerdiv>
      <div>
        <h1>{city}</h1>
        <div className="weather-info">
          <p className="temperature">{Math.floor(data.main.temp) - 273}|C</p>
          <p className="weather-desc">{weatherDescription}</p>
          <img src={logo} alt="#"></img>
        </div>
        <div className="weather-parameters">
          <div className="humidity" className="parameters">
            <p style = {{transform : 'scale(1.2)'}}>Humidity</p>
            <p style = {{fontWeight : '600', letterSpacing : '1px'}}>{data.main.humidity}</p>
            <img src={humidity} alt="#"></img>
          </div>
          <div className="pressure" className="parameters">
            <p style = {{transform : 'scale(1.2)'}}> Pressure</p>
            <p style = {{fontWeight : '600', letterSpacing : '1px'}}>{data.main.pressure}</p>
            <img src={pressure} alt="#"></img>
          </div>
          <div className="visibility" className="parameters">
            <p style = {{transform : 'scale(1.2)'}}> Visibilty</p>
            <p style = {{fontWeight : '600', letterSpacing : '1px'}}>{data.visibility}</p>
          </div>
        </div>  
      </div>
    </Outerdiv>
  );
}

export default DisplayWeather;