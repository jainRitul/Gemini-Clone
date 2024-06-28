

import React, { useContext } from 'react'
import './Main.css'

import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)



  return (
    <div className='Main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
          ? <>

            <div className="greet">
              <p><span>Hello, Ritul..</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Places to visit in France</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Give me approaches to tackle the Rain Water Trap problem</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>suggest Beautiful places to see on road trip</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Tell me about India</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className='loader'>
                  <div className="dot white"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }

            </div>
          </div>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter the prompt here..' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img  onClick={() => onSent()} src={assets.send_icon} alt="" />: null}
            </div>
          </div>
          <p className="bottom-info">
            bottom info __Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores a sunt!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main