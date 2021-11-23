/**
 * This component renders results of the Search task
 * DisplayWeather function receives props as city and weather data Object from App component.
 * Different parameters are extracted from weather data and UI is updated.
 */

import styled from "styled-components";
import logos from "../logos-images/image_index";
import bg from "./../images/bg_image.jpg";

const Outerdiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serrif;

  h1 {
    margin: 1.2rem auto;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .main-div {
    display: flex;
  }

  .main-div div {
    text-align: center;
    margin: 10px auto;
    font-size: 1.2rem;
    letter-spacing: 3px;
    padding: 0.2rem 1rem;
  }

  .temperature-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #logo {
    height: 80px;
  }

  #temperature {
    font-weight: 600;
  }

  .weather-parameter {
    display: flex;
    flex-direction: column;
  }

  #humidity,
  #pressure,
  #visibility {
    background-color: #f1dbd054;
    border-radius: 5px;
    color: #4e0000;
  }

  @media screen and (max-width: 750px) {
    .main-div {
      flex-direction: column;
      width: 60vw;
      margin-top: 3rem;
    }

    img {
      display: none;
    }
  }

  @media screen and (min-width: 751px) {
    .main-div {
      margin: 3rem auto;
    }

    #city {
      font-size: 1.2rem;
    }

    h1 {
      margin-top: 4rem;
    }

    #humidity_val,
    #pressure_val {
      margin-bottom: 1.7rem;
    }

    #logo,
    #temperature {
      margin-right: 3rem;
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
    <Outerdiv
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{city}</h1>
      <div id="city">{data.weather[0].description}</div>
      <div className="main-div">
        <div className="temperature-icon">
          <div id="temperature">{Math.floor(data.main.temp) - 273}|C</div>
          <img src={logo} alt="#" id="logo"></img>
        </div>
        <div className="weather-parameter">
          <div id="humidity">Humidity</div>
          <div id="humidity_val">{data.main.humidity}</div>
          <div id="pressure">Pressure</div>
          <div id="pressure_val">{data.main.pressure}</div>
          <div id="visibility">Visibilty</div>
          <div id="visibility_val">{data.visibility}</div>
        </div>
      </div>
    </Outerdiv>
  );
}

export default DisplayWeather;
