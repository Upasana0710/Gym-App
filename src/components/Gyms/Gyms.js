import './Style.css';
import Modal from './Modal';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { getGyms } from '../../api/index';
import SimpleMap from './SimpleMap'
import { GoogleMap, userLoadScript, Marker } from '@react-google-maps/api';

const Gyms = () => {

    const [gyms, setGyms] = useState([]);
    const [show, setShow] = useState(false);
    const [gymItem, setGymItem] = useState();

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
                    <div className='card-content'>11.am</div>
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
                    <>
                        <div className="wrapper" ontouchstart="this.classList.toggle('hover');"  key={gym.id}>
                            <div className="flipper">
                                <div className="card-front">
                                    <div className='written'>
                                        <div className='name'>{gym.name}</div>
                                        <div className='about'>{gym.bio}</div>
                                    </div>
                                </div>
                                <div className="card-back" onClick={() => { setShow(true); setGymItem(gym) }}>
                                    <div className='details'>
                                        <div className="info-piece1">{gym.name}</div>
                                        <div className="info-piece">Opening Time: {Math.trunc(gym.open_time / 100)}:{gym.open_time % 100}hrs</div>
                                        <div className="info-piece">Closing Time: {Math.trunc(gym.close_time / 100)}:{gym.close_time % 100}hrs</div>
                                        <div className="info-piece">Skill: {gym.skill}</div>
                                        <div className="info-piece">Exercise Type: {gym.exercise}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal show={show} gym={gymItem} onClose={() => setShow(false)} />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Gyms