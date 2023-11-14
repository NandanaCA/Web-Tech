import React,{useState} from 'react'
import axios from 'axios'
import './Home.css'


export const Home= () =>
{
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
  
        const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=2beb281649436a1f5046fe0102f5ab39`;

  
        const response1 = await axios.get(url1);
      
        const latitude = response1.data[0]?.lat;
        const longitude = response1.data[0]?.lon;

  
        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=2beb281649436a1f5046fe0102f5ab39`;

      
        const response2 = await axios.get(url2);

        setData(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setLocation('');
    }
  };

  return(
    <div className="home">
    <div className="search">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
    </div>
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }

    </div>
  </div>
  )
}