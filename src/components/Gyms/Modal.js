import React, { useState, useEffect } from 'react'
import './Style.css';
import '../../App.css'
import { getGyms } from '../../api/index';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ show, gym, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="overlay">
    <div className="overlay-inner">
        <button className="close" onClick={onClose}><CloseIcon/></button>
        <div className="inner-box">
            <img src="https://motionarray.imgix.net/preview-457274-QXbjh71dCp1TtGwt-large.jpg?w=660&q=60&fit=max&auto=format" alt="" />
            <div className="modal-detail">
                <div className='modal-name'>{gym.name}</div>
                <div className='address'>{gym.address}</div><br/>
                <div className='price'>Rs. {gym.price}</div>
                <button className='register'>Join</button>
            </div>
        </div>
        <p className="description">{gym.description}</p>
    </div>
</div>
    // <div className='modal-box'>
    //   <div className='modal-inner'>
    //     <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
    //     <div className="inner-box">
    //         <img className='modalPic' src="https://motionarray.imgix.net/preview-457274-QXbjh71dCp1TtGwt-large.jpg?w=660&q=60&fit=max&auto=format" alt="gympic" width="250px"></img>
    //                     <div className="modal-info">
    //                         <div className='title'>{gym.name}</div>
    //                         <div>{gym.address}</div>
    //                         <div className='describe'>{gym.description}</div><br/>
    //                         <button className='register'>Register</button>
    //                     </div>
    //                 </div>
    //   </div>
    // </div>
  )
}

export default Modal