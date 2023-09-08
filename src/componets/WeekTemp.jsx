import React from 'react'
import few_cloud from '../images/few_cloud.svg';

export default function WeekTemp() {
    return (
        <>
            <div className='card-temp'>
                <div className='card-title'>
                    <p>Monday</p>
                </div>
                <div className='icon-small'>
                    <img src={few_cloud} alt="" />
                    <p>Few cloud</p>
                </div>
                <div className='temp'>
                    <p>33°</p>
                </div>
            </div>
        </>
    )
}
