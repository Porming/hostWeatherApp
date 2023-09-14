import React from 'react';
import clear_sky_01d from '../images/clear_sky_01d.svg';
import clear_sky_01n from '../images/clear_sky_01n.svg';
import few_clouds_02d from '../images/few_clouds_02d.svg';
import few_clouds_02n from '../images/few_clouds_02n.svg';
import clouds_03d from '../images/clouds_03d.svg';
import broken_clouds_04d from '../images/broken_clouds_04d.svg';
import broken_clouds_04n from '../images/broken_clouds_04n.svg';
import shower_rain_09d from '../images/shower_rain_09d.svg';
import shower_rain_09n from '../images/shower_rain_09n.svg';
import rain_10d from '../images/rain_10d.svg';
import rain_10n from '../images/rain_10n.svg';
import thunderstorm_11d from '../images/thunderstorm_11d.svg';
import thunderstorm_11n from '../images/thunderstorm_11n.svg';
import snow_13d from '../images/snow_13d.svg';
import snow_13n from '../images/snow_13n.svg';
import mist_50d from '../images/mist_50d.svg';
import mist_50n from '../images/mist_50n.svg';


const weatherIcons = {
    '01d': clear_sky_01d,
    '01n': clear_sky_01n,
    '02d': few_clouds_02d,
    '02n': few_clouds_02n,
    '03d': clouds_03d,
    '03n': clouds_03d,
    '04d': broken_clouds_04d,
    '04n': broken_clouds_04n,
    '09d': shower_rain_09d,
    '09n': shower_rain_09n,
    '10d': rain_10d,
    '10n': rain_10n,
    '11d': thunderstorm_11d,
    '11n': thunderstorm_11n,
    '13d': snow_13d,
    '13n': snow_13n,
    '50d': mist_50d,
    '50n': mist_50n,
};

export default function ShowTemp({city, weather, tempareture, humidity, wind, min_temp, max_temp, icon}) {
    let today = new Date();
    let todayFormatted = today.toLocaleString('en-US', {weekday: 'long'});

    return (
        <>
            <section className='temp-detail'>
                <div className='show-day'>
                    <p className='day'>{todayFormatted}</p>
                    <p className='location'>Today in <span className='city'>{city} </span></p>
                </div>

                <div className='weather-icon-large'>
                    <img className='icon-large' src={weatherIcons[icon]} alt={weather} />
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
