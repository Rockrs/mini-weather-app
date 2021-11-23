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
  height: 500px;
  width: 400px;
  display: flex;
  justify-content: center;
  margin: 100px auto;
  background:d8d2d294;
  border-radius: 10px;
  // border: 2px solid red;

  .modal-div {
    margin-top: 1rem;
    text-align: center;
  }

  h1{
    font-size: 2.3rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
  }

  .search-div {
    margin: 3rem 1.5rem;
    display:flex;
    flex-direction:column;
    // border: 2px solid red;
    align-items:center;
  }

  #input {
    font-size: 1.4rem;
    padding: 0.4rem 0.4rem;
    margin: 2rem auto;
    border : none;
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
    padding: 1rem 1rem;
    width: 150px;
  }

  #btn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .image {
    position: absolute;
    top: 290px;
    margin-left :8rem;
    // border: 2px solid blue; 
  }
`;

function WeatherModal(props) {
  const { city, onclick} = props;

  return (
    <ModalStyle>
      <div>
        <div className="modal-div">
          <h1>React Weather App</h1>
          <div className="image">
            <img src={weatherlogo} alt="#" style = {{width : '200px'}}></img>
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