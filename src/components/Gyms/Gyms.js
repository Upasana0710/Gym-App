import './Style.css';
import GymCard from './GymCard';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { getGyms } from '../../api/index';
import SimpleMap from './SimpleMap'
import { GoogleMap, userLoadScript, Marker } from '@react-google-maps/api';

const Gyms = () => {

    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        getGyms().then((res) => {
            setGyms(res.data);
            console.log(gyms);
        }).catch((error) => {
            console.log(error);
        })
    })

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
            <div className='add-gym'>
                <div className='card-header'>Gyms</div>
                <NavLink to='/addgyms'>
                    <button className='button-container'>Add Your Gyms</button>
                </NavLink>
            </div>
                <div className='card-container'>
                    {gyms.map((gym) => (
                        <div className='gymCard' key={gym.id} >
                            <div className='written'>
                                <div className='name'>{gym.name}</div>
                                <div className='about'>{gym.description}</div>
                            </div>
                        </div>

                    ))}
                </div>
                {/* <div className='card-container'>
                        {gyms.map((gym) => (
                            <div className='gymCard' key={gym.id}>
                                <div className='written'>
                                    <div className='name'>Name</div>
                                    <div className='about'>desc</div>
                                </div>
                            </div>
                        ))}
                </div> */}
        </div>
    )
}

export default Gyms