import React from 'react';
import few_cloud from '../images/few_cloud.svg';

export default function ShowTemp({city, weather, tempareture, humidity, wind, min_temp, max_temp}) {

    return (
        <>
            <section className='temp-detail'>
                <div className='show-day'>
                    <p className='day'>Sunday</p>
                    <p className='location'>Today in <span className='city'>{city} </span></p>
                </div>

                <div className='weather-icon-large'>
                    <img className='icon-large' src={few_cloud} alt="" />
                    <p>{weather}</p>
                </div>

                <div className='show-temp-detail'>
                    <div className='show-temp'>
                        <p className='tempareture'>{tempareture}°</p>
                    </div>
                    <div className='data-temp'>
                        <div className='side-data-temp'>
                            <p>Humidity <span className='humidity'>{humidity}%</span></p>
                            <p>wind <span className='wind'> {wind}km/h</span></p>
                        </div>
                        <div className='side-data-temp'>
                            <p>Min temp <span className='min-temp'>{min_temp}°</span></p>
                            <p>Max temp <span className='max-temp'>{max_temp}°</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
