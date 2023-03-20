import './Style.css';
import GymCard from './GymCard';
import React from 'react'
import SimpleMap from './SimpleMap'
import {GoogleMap, userLoadScript, Marker} from '@react-google-maps/api';

const Gyms = () => {


    return (
        <div className='gyms-container'>
            <div className='topBar'>
                <div className='info'>
                    <div className='card-name'>Price</div>
                    <div className='card-content'>Rs 1000</div>
                </div>
                <div className='info'>
                    <div className='card-name'>Opens at</div>
                    <div className='card-content'>11AM</div>
                </div>
                <div className='info'>
                    <div className='card-name'>Closes at</div>
                    <div className='card-content'>8PM</div>
                </div>
                <div className='info'>
                    <div className='card-name'>Skill Level</div>
                    <div className='card-content'>Beginner</div>
                </div>
                <div className='info'>
                    <div className='card-name'>Exercise type</div>
                    <div className='card-content'>Bodyweight</div>
                </div>
                <input type='text' className='search-button' placeholder='Search' />
            </div>
            <div className='flex-container'>
                <div className='card-container'>
                    <div className='card-header'>Gyms</div>
                    <div className='cards'>
                        <GymCard />
                        <GymCard />
                        <GymCard />
                    </div>
                </div>
                <div className='map'>
                    
                </div>
            </div>
        </div>
    )
}

export default Gyms