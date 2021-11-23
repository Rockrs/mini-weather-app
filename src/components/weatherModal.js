/**
 * This component renders home page component ie. weather modal
 * After getting input value as city name from input tag we change state of city useState variable
 * After Clicking on Search Here Button we execute event handler that is passed as one of props key from App component.
 * Event handlers does following actions:
 * makes fetch API call to get data from weather API based on city name.
 * changes the state of renderState and data useState variable which causes  function App to re-render(re-invoke), which in turn causes diplayweather component to render based on conditional rendering.
 */

import styled from "styled-components";
import weatherlogo from "./../images/weather_image.jpg";
import temperature_logo from "./../images/temperature_image.jpg";

const ModalStyle = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column;
  background-image: url(${weatherlogo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50vw;
  margin: 4rem auto;
  border-radius: 10px;

  h1{
    margin-top : 3rem;
    margin-bottom: 2rem;
    color:#fff;
  }

  .modal-div{
    // border: 2px solid red;
    height: 70vh;
    width: 100%;
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img{
    width: 400px;
    height: 300px;
  }

  input{
    font-size: 1.1rem;
    margin-top: 1rem;
    padding: 5px 5px;
    border: none;
    border-radius: 5px;
  }

  input:focus{
    border: none;
    outline: none;
  }

  button{
    margin-top: 1.1rem;
    padding: 5px 5px;
    border-radius : 5px;
    border: none;
  }

  button:hover{
    transform: scale(1.3);
    background-color: green;
    color: white;
  }

  @media screen and (max-width: 860px){
    width: 80vw;

    img{
      width: 250px;
      height: 250px;
    }
  }
`;

function WeatherModal(props) {
  const { city, onclick } = props;

  return (
    <ModalStyle>
      <h1>React Weather App</h1>
      <div className="modal-div">
        <div>
          <img src={temperature_logo} alt="#"></img>
        </div>
        <input
          placeholder="Enter City"
          id="input"
          type="text"
          onChange={(e) => {
            city(e.target.value);
          }}
        ></input>
        <button type="button" id="btn" onClick = {onclick}>
          Search Here
        </button>
      </div>
    </ModalStyle>
  );
}

export default WeatherModal;
