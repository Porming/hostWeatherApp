import './App.css'
import { useState, useEffect} from 'react';
import SearchLocation from './componets/SearchLocation';
import ShowTemp from './componets/ShowTemp';
import WeekTemp from './componets/WeekTemp';

function App() {

  const [search, setSearch] = useState('cambodia')
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const getTempDatas = async() =>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=0d9feb068d8c074ba5949982c8f24443`);
      const res = await response.json();
      setDatas([res])
    }
    getTempDatas();

  }, []);

  const tempdata = datas.map((data) => {
      return <ShowTemp 
      city={data.name}
      weather={data.weather.main}
      tempareture={data.main.temp}
      humidity={data.main.humidity}
      wind={data.wind.speed}
      min_temp={data.main.temp_min}
      max_temp={data.main.temp_max}
      />
    });
  



  return (
    <>
      <div className='layout'>
        <header>
          <h1>WEATHER</h1>
        </header>
        <SearchLocation />
        <section className='container'>
          <div className='content'>
            {tempdata}
            <p className='week-text'>Next 6 Days</p>
            <section className='week-temp'>
              <div className='show-week-temp'>
                <WeekTemp />
              </div>
            </section>
          </div>

        </section>
      </div>
    </>
  )
}

export default App
