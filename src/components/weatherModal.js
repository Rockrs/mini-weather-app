/**  
 * This component renders home page component ie. weather modal
 * After getting input value as city name from input tag we change state of city useState variable
 * After Clicking on Search Here Button we execute event handler that is passed as one of props key from App component.
 * Event handlers does following actions:
    * makes fetch API call to get data from weather API based on city name.
    * changes the state of renderState and data useState variable which causes  function App to re-render(re-invoke), which in turn causes diplayweather component to render based on conditional rendering.
*/

import styled from "styled-components";
import weatherlogo from "./../logos-images/weather_logo.svg";

const ModalStyle = styled.div`
  position: relative;
  height: 470px;
  width: 400px;
  border: 2px solid #bae3a43b;
  display: flex;
  justify-content: center;
  margin: 150px auto;
  background-color: #ff7777bf;
  border-radius: 10px;
  // box-shadow : 2px 3px;

  .modal-div {
    // border :2px solid blue;
    margin-top: 1rem;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
  }

  .search-div {
    margin: 3rem 1.5rem;
    // border :2px solid red;
  }

  #input {
    font-size: 1rem;
    padding: 0.4rem 0.4rem;
    margin-right: 1rem;
    border: none;
  }

  #input:hover,
  #input:focus {
    background-color: #c3bdc7;
    outline: none;
  }

  #btn {
    background-color: #cf7c7cc7;
    font-size: 1rem;
    letter-spacing: 0.7px;
    border-radius: 10px;
    border: none;
  }

  #btn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .image {
    position: absolute;
    top: 170px;
    // border : 2px solid red;
    margin: 1rem auto;
  }

  img {
    width: 250px;
    height: 200px;
    margin: 0 4rem;
  }
`;

function WeatherModal(props) {
  const { city, onclick} = props;

  return (
    <ModalStyle>
      <div>
        <div className="modal-div">
          <p>React Weather App</p>
          <div className="image">
            <img src={weatherlogo} alt="#"></img>
          </div>
          <div className="search-div">
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
        </div>
      </div>
    </ModalStyle>
  );
}

export default WeatherModal;