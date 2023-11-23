import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'


export const Home= () =>
{
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const [selectData, setSelectData] = useState([]);
  const [selectValue, setSelectValue] = useState('');

  useEffect( () => {
    fetchData()
  },[])

  const fetchData = async() => {
    await fetch('http://localhost:4000/locations')
    .then(res => res.json())
    .then(data1 => setSelectData(data1))
    .catch(err => console.log(err));
  };

  const setSelectLocation = e => {

    setLocation(e.target.value)
    setSelectValue(e.target.value) 
  }

  //twoCalls = e => {
   // this.functionOne(e)
    //this.functionTwo()
  //}


  const SelectDropdown = () => {
    return(
      <select value={selectValue} onChange={(e) => setSelectLocation(e)  } >
        {
          selectData.map( (item,index) =>(
              <option value={item.name} key={item.name}>{item.name}</option>
          ))
        }
      </select>

    )

  }

  const saveLocation = async (event) =>{
    try{

      if (location.trim().length !== 0 ) {
        console.log('saving location');


        const postData = {
          name: location,
          description: 'from screen'
          // Add more key-value pairs as needed
        };

        const response = await fetch('http://localhost:4000/location', {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        fetchData()
        const result = await response.json();
        console.log(result);


        

      } 
      else{
        console.log('location is empty');
      }

      } catch (error) {
        console.error('Error saving data:', error);
      }


  }


  const searchLocation = async (event) => {
    if (event.key === 'Enter' && location.trim().length !== 0 ) {
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

      //setLocation('');
    }
  };


  const searchLocation2 = async (event) => {
    if (location.trim().length !== 0) {
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
      //setSelectValue(location) 
      //setLocation('');
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
        
        <br /><br />
        <div>Or Select from List</div>
        <br />
        <SelectDropdown />
        <input type="button" onClick={searchLocation2} value="Go" />
        
        <input type="button" onClick={saveLocation} value="Save" />
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