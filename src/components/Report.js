import React,{useState} from 'react'
import axios from 'axios'
import './Report.css'
export const Report= () =>
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

  
       
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=2beb281649436a1f5046fe0102f5ab39`;
      
        const response2 = await axios.get(url2);

        setData(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      setLocation('');
    }
  };

  return(
    <div className="report">
    <div className="search">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
   </div>
    <div className="container">
    
    <div className="location">
    {data && data.city && (
     <p>{data.city.name}</p>)
    }
    </div>

    <div className="one">
    {data && data.list && data.list[0] && (
      <>
      <h1>{data.list[0].dt_txt.substring(12, 16)} pm</h1>
      <br></br>
      <h6>min temperature</h6>
      <p>{data.list[0].main.temp_min}°C</p>
      <br></br>
      <h6>max temperature</h6>
      <p>{data.list[0].main.temp_max}°C</p>
      <br></br>
      <h6>humidity</h6>
      <p>{data.list[0].main.humidity}%</p>
      <br></br>
      <h6>wind speed</h6>
      <p>{data.list[0].wind.speed} MPH</p>
      <br></br>
      
      </>)
    }
    </div>


    <div className="two">
    {data && data.list && data.list[1] && (
      <>
      <h1>{data.list[1].dt_txt.substring(12, 16)} pm</h1>
      <br></br>
      <h6>min temperature</h6>
      <p>{data.list[1].main.temp_min}°C</p>
      <br></br>
      <h6>max temperature</h6>
      <p>{data.list[1].main.temp_max}°C</p>
      <br></br>
      <h6>humidity</h6>
      <p>{data.list[1].main.humidity}%</p>
      <br></br>
      <h6>wind speed</h6>
      <p>{data.list[1].wind.speed} MPH</p>
      <br></br>
      
      </>)
    }
    </div>

    <div className="three">
    {data && data.list && data.list[0] && (
      <>
      <h1>{data.list[2].dt_txt.substring(12, 16)} pm</h1>
      <br></br>
      <h6>min temperature</h6>
      <p>{data.list[2].main.temp_min}°C</p>
      <br></br>
      <h6>max temperature</h6>
      <p>{data.list[2].main.temp_max}°C</p>
      <br></br>
      <h6>humidity</h6>
      <p>{data.list[2].main.humidity}%</p>
      <br></br>
      <h6>wind speed</h6>
      <p>{data.list[2].wind.speed} MPH</p>
      <br></br>
      
      </>)
    }
    </div>
  </div>
  </div>

  )
}