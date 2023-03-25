import './Style.css';
import '../../App.css'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { createGym } from '../../api/index'

const AddGyms = () => {
    const [gym, setGym] = useState({ email: '', name: '', open_time: 0, close_time: 0, address: '', description: '', skill: '', exercise: '' })
    const [openhrs, setopenhrs] = useState(0);
    const [openmin, setopenMin] = useState(0);
    const [closehrs, setclosehrs] = useState(0);
    const [closemin, setcloseMin] = useState(0);
    var o, c;
    const handleSubmit = (e) => {
        gym.open_time = openhrs * 100 + openmin;
        gym.close_time = closehrs * 100 + closemin;
        console.log(gym)
        createGym(gym).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        setGym({ email: '', name: '', open_time: 0, close_time: 0, address: '', description: '', skill: '', exercise: ''});
        setopenhrs(0);
        setopenMin(0);
        setclosehrs(0);
        setcloseMin(0);
    }

    // const base64toblob = (dataURI) => {
    //     var byteString = atob(dataURI.split(',')[1]);
    //     var ab = new ArrayBuffer(byteString.length);
    //     var ia = new Uint8Array(ab);

    //     for(var i = 0; i<byteString.length; i++){
    //         ia[i] = byteString.charCodeAt(i);
    //     }
    //     var blob = new Blob([ab],{type: 'image/jpeg'});
    //     setGym({...gym, selectedFile: blob});
    // }
    return (
        <div className='addgyms-main'>
            <div className='gym-addform'>
                <div className='details'>Fill up the details!</div>
                <div className='input-fields'>
                    <div className='input'>
                        <label for='name'>Name: &nbsp;</label>
                        <input type='text' className='input-box' id='name' value={gym.name} onChange={(e) => setGym({ ...gym, name: e.target.value })}></input>
                    </div>
                    <div className='input'>
                        <label for='Email'>Email: &nbsp;</label>
                        <input type='text' className='input-box' id='Email' value={gym.email} onChange={(e) => setGym({ ...gym, email: e.target.value })}></input>
                    </div>
                    <div className='time-input' id='open-time'>
                        <label for='open-time'>Open Time: &nbsp;</label>
                        <input type='number' className='time' value={openhrs ? openhrs : ''} onChange={(e) => setopenhrs(parseInt(e.target.value))}></input>&nbsp;hrs&nbsp;&nbsp;
                        <input type='number' className='time' value={openmin ? openmin : ''} onChange={(e) => setopenMin(parseInt(e.target.value))}></input>&nbsp;min&nbsp;&nbsp;
                    </div>
                    <div className='time-input' id='close-time'>
                        <label for='close-time'>Close Time: &nbsp;</label>
                        <input type='number' className='time' value={closehrs ? closehrs : ''} onChange={(e) => setclosehrs(parseInt(e.target.value))}></input>&nbsp;hrs&nbsp;&nbsp;
                        <input type='number' className='time' value={closemin ? closemin : ''} onChange={(e) => setcloseMin(parseInt(e.target.value))}></input>&nbsp;min&nbsp;&nbsp;
                    </div>
                    <div>
                        <label for='address'>Address:&nbsp;</label>
                        <input type="text" id='address' className='input-box' value={gym.address} onChange={(e) => setGym({ ...gym, address: e.target.value })}></input>
                    </div>
                    <div >
                        <label for='description' id='description'>&nbsp;Description:&nbsp;</label>
                        <input type="text" id="description" className='input-box' value={gym.description} onChange={(e) => setGym({ ...gym, description: e.target.value })}></input>
                    </div>
                    <div className='select'>
                        <div className='input'>
                            <select name='skills' className='skills' value={gym.skill} onChange={(e) => setGym({ ...gym, skill: e.target.value })}>
                                <option>Skill Level</option>
                                <option>Beginner</option>
                                <option>Moderate</option>
                                <option>Proffesional</option>
                            </select>
                        </div>
                        <div className='input'>
                            <select name='exercise' className='skills' value={gym.exercise} onChange={(e) => setGym({ ...gym, exercise: e.target.value })}>
                                <option>Exercise</option>
                                <option>Bodyweight</option>
                                <option>Moderate</option>
                                <option>Proffesional</option>
                            </select>
                        </div>
                    </div>
                    <div className='pics'>
                        <label for='pics'>Upload pictures: &nbsp;</label>
                        <FileBase id='pics' type='file' multiple={false} onDone={({ base64 }) => setGym({...gym, selectedFile: base64})}></FileBase>
                    </div>
                </div>
                <button className='register' style={{ "width": "50%" }} onClick={handleSubmit}>Register</button>

            </div>
        </div>
    )
}

export default AddGyms