import './Style.css';
import homeimg from './dumbell.gif';
import ReactSpeedometer from "react-d3-speedometer"
import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState({weight:0,height:0,age:0,bmi:0});

  const handleCalculate = () => {
    var hs=data.height*data.height
    var calculated_bmi=data.weight/hs
    setData({...data,bmi:parseFloat(calculated_bmi).toFixed(2)})
    console.log(data.bmi)
  }
  return (
    <div className='main'>
      <div className='bmi-box'>
        <div className='top'>
          <div className='heading'>Find the Nearest Gym - Your Ultimate Guide to Fitness Centers.</div>
          <div className='intro'>Looking for a gym that's convenient and close to your location? Look no further cuz we provide a comprehensive guide to finding the nearest gym to you</div>
          <NavLink to='/gyms'>
            <button className='bmi-cal'>Find The Nearest Gyms</button>
          </NavLink>
        </div>
        <div className='center-container'>
          <div className='block1'>
            <div className='head1'>Training Programs</div>
            <div className='para1'>A large number of training programs to reach your monthly goal.</div>
          </div>
          <div className='pic-container'>
            <img src={homeimg} alt='workout' height='400px' />
          </div>
          <div className='block1'>
            <div className='head1'>Training Programs</div>
            <div className='para1'>A large number of training programs to reach your monthly goal.</div>
          </div>
        </div>
      </div>
      <div className='right'>
      <div className='bmi-form'>
      <div className='bar'>BMI Calculator 🔥</div>
      <ReactSpeedometer
          width={300}
          height={180}
          ringWidth={40}
          value={data.bmi}
          segments={5}
          maxValue={45}
          minValue={0}
          customSegmentStops={[0, 18.5, 25, 30, 40, 45]}
          currentValueText={`BMI Level : ${data.bmi} units`}
          segmentColors={[
            "#ee3e3e",
            "#47c247",
            "#ddfa3b",
            "#ee3e3e",
            "#8b0101",
          ]}
          customSegmentLabels={[
            {
              text: "Underweight",
              position: "OUTSIDE",
              color: "#555",
              fontSize: "12px",
            },
            {
              text: "Normal",
              position: "OUTSIDE", 
              color: "#555",
              fontSize: "12px",
            },
            {
              text: "Ok",
              position: "OUTSIDE",
              color: "#555",
              fontSize: "14px",
            },
            {
              text: "Overweight",
              position: "OUTSIDE",
              color: "#555",
              fontSize: "12px",

            },
            {
              text: "Obesity",
              position: "OUTSIDE",
              color: "#555",
              fontSize: "12px",
            },
          ]}
        />
        <input className='input-field' type='number' placeholder='Age' value={data.age===0?'':data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
        <input className='input-field' type='number' placeholder='Weight(in Kg)' value={data.weight===0?'':data.weight} onChange={(e)=>setData({...data,weight:e.target.value})}/>
        <input className='input-field' type='number' placeholder='Height(in m)' value={data.height===0?'':data.height} onChange={(e)=>setData({...data,height:e.target.value})}/>
        <div className='radio'>
          <div className='gender'>
          <span className='genderText'>Gender:</span>
          </div>
          <div className='gender'>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
          </div>
          <div className='gender'>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
          </div>
        </div>
        <button className='bmi-button' onClick={handleCalculate}>Calculate your BMI</button>
      </div>
      </div>
    </div>

  )
}

export default Home