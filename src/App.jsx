import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {



  const [data, setData] = useState({
         celcius : 10,
         cityName : 'Delhi',
         humidity : 10,
         speed : 2
  })

const [cityName, setcityName]=useState()

  const apiKey = 'c161a8c8648c79e8fdd84d693f6e63f5'


 const  handleClick = () => {

    if(cityName !=="") {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      axios.get(apiURL)
      .then((res) => {
        //  console.log(res.data)
         setData({...data, 
                    celcius : res.data.main.temp,
                    cityName : res.data.name, 
                   humidity : res.data.main.humidity,
                      speed : res.data.wind.speed
                      
                 })
       }).catch((err) => console.log(err))
    }
 }
  
  

 

  return (
    <div className='  bg-slate-300  text-center h-full p-10 rounded-md'>
      <div className='flex flex-col justify-center items-center'> 
        
        <div className=' w-[70%] flex flex-col justify-center items-center mt-4 bg-blue-300 p-5 rounded-md flex-wrap'>
           <input type='text' placeholder=' Search City Name' className='rounded m-2 '
           onChange={e => setcityName(e.target.value)} 
           />
           <button className='bg-blue-600 rounded text-white p-1' 
           onClick={handleClick}
           >Search</button>
        </div>
        <div className='bg-blue-500 w-[70%] m-2 rounded-md '>
          <div className='flex flex-col justify items-center p-10 my-2 rounded-md text-white'>
            <img src="/src/assets/weather-icon-png-11102.png" alt='' className='w-[150px] p-2 '/>
              {/* <h1>{Math.round(data.celcius)}c</h1>  */}
              <h1>{((data.celcius)-273.15).toFixed(2)}°c</h1>
              <h2>{data.cityName}</h2> 
          </div>
          <div className='flex  justify-center items-center '>
            <div className='flex gap-2 text-white'> 
                <img src="/src/assets/Humidity.png" alt='' className='w-[45px] '/>
               <div>
               <h1>{data.humidity}%</h1> 
                <p>Humidity</p>
               </div>
            </div>
            <div className=' flex gap-2 text-white p-7'>
                <img src="/src/assets/Wind.png" alt='' className='w-[45px] '/> 
                <div className=''>
                <h1 className=''>{data.speed}km/</h1> 
                <p>Wind</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
