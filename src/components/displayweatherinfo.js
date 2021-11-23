/**
 * This component renders results of the Search task
 * DisplayWeather function receives props as city and weather data Object from App component.
 * Different parameters are extracted from weather data and UI is updated.
 */

import styled from "styled-components";
import logos from "../logos-images/image_index";
import humidity from "../logos-images/humidity.svg";
import pressure from "../logos-images/pressure.png";

const Outerdiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

  .main-div {
    background: linear-gradient(papayawhip, #d8d2d294);
    height: 70vh;
    width: 40vw;
    max-width: 500px;
    margin: 100px auto;
    border-radius: 20px;
    text-align: center;
    padding-top: 50px;
    font-family : "Poppins", sans-serrif;
  }

  .height {
    background-color: #d3c1a542;
  }
  h1 {
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    color: #ff6230de;
    margin: 1rem auto;
  }

  .weather-info {
    display: flex;
    margin: 5rem auto;
    // border: 2px solid red;
  }

  #logo {
    width: 100px;
    margin-right: 7rem;
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
    margin: 2rem 1rem;
    padding: 1rem 1rem;
  }

  .parameter {
    font-size: 1rem;
    letter-spacing: 2px;
    color:#a25c14 ;
  }

  @media screen and (max-width: 1000px) {
    .main-div {
      width: 80vw;
    }

    .weather-info {
      width: 400px;
    }
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
        <div className="main-div">
          <div className="height">
            <h1>{city}</h1>
          </div>
          {data.weather[0].description}
          <div className="weather-info">
            <p className="temperature">{Math.floor(data.main.temp) - 273}|C</p>
            <img src={logo} alt="#" id="logo"></img>
          </div>
          <div className="weather-parameters">
            <div className="parameter">
              <p style={{ transform: "scale(1.2)" }}>Humidity</p>
              <p style={{ fontWeight: "600", letterSpacing: "1px" }}>
                {data.main.humidity}
              </p>
              <img src={humidity} alt="#"></img>
            </div>
            <div className="parameter">
              <p style={{ transform: "scale(1.2)" }}> Pressure</p>
              <p style={{ fontWeight: "600", letterSpacing: "1px" }}>
                {data.main.pressure}
              </p>
              <img src={pressure} alt="#"></img>
            </div>
            <div className="parameter">
              <p style={{ transform: "scale(1.2)" }}> Visibilty</p>
              <p style={{ fontWeight: "600", letterSpacing: "1px" }}>
                {data.visibility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Outerdiv>
  );
}

export default DisplayWeather;
