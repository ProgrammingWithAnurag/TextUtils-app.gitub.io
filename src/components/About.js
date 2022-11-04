import React, { useState } from 'react'

export default function About() {

      const [myStyle,setMyStyle] = useState({
            color:'black',
            backgroundColor:'white'
      })
      const [btnText,setBtnText] = useState('Enable Dark Mode')
      
     const toggleStyle = ()=>{
            if(myStyle.color === 'black'){
                  setMyStyle({
                        color:'white',
                        backgroundColor:'black',
                        border:'3px solid white'
                  })
                  setBtnText('Enable Light Mode')
            }
            else{
                  setMyStyle({
                        color:'black',
                        backgroundColor:'white'
                  })
                  setBtnText('Enable Dark Mode')
            }
      }

  return (
    <div className='border border-2xl p-5' style={myStyle} >
      <h1>About Us</h1>
      <div className='container my-3 border border-xl ' style={myStyle}>
            <p>lobcj hbb hello i am Anurag dubey . How are you I am pursuing Bachlor degree from Rajiv Academy For Techlnology & Management at Mathura .
                  My hobies to do coding and my short term goal is to get a good job in reputed company and my lonng term goal is to get a good position in a company .
                  Thanku this is all about me.
            </p>
      </div>
      <div className='container my-3 border border-xl' style={myStyle}>
            <p>lobcj hbb hello i am Anurag dubey . How are you I am pursuing Bachlor degree from Rajiv Academy For Techlnology & Management at Mathura .
                  My hobies to do coding and my short term goal is to get a good job in reputed company and my lonng term goal is to get a good position in a company .
                  Thanku this is all about me.
            </p>
      </div>
      <div className='container my-3 border border-xl'style={myStyle}>
            <p>lobcj hbb hello i am Anurag dubey . How are you I am pursuing Bachlor degree from Rajiv Academy For Techlnology & Management at Mathura .
                  My hobies to do coding and my short term goal is to get a good job in reputed company and my lonng term goal is to get a good position in a company .
                  Thanku this is all about me.
            </p>
      </div>
      
      <div className='container my-3'>
      <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>
      </div>
    </div>
  )
}
