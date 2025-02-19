import React from "react";
import "./HotelCard.css";
import { AiOutlineArrowLeft} from 'react-icons/ai';
import {FaBookmark} from 'react-icons/fa';
import {FaShare} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import {Fabed} from 'react-icons/fa';

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img
          src="https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom"></img>
        
        <div className="hotel-icons">
            <div>
          <AiOutlineArrowLeft style={{color:"white", borderRadius:"20px", border:"1px solid black", backgroundColor:"black", padding:"5px"}}/>
          </div>
          <div className="hoteli">
          <FaBookmark style={{color:"white", borderRadius:"20px", border:"1px solid black", backgroundColor:"black", padding:"5px"}} />
          <FaShare style={{color:"white", borderRadius:"20px", border:"1px solid black", backgroundColor:"black", padding:"5px"}} />
        </div>
        </div>
      </div>

      <div className="hotel-info">
        <h2>Hotel Dark Moon</h2>
        <p className="location"> <MdLocationOn style={{color:"black", gap:"10px"}} />Paris, France</p>
        <div className="R-p">
        
        <p className="rating"><FaStar /> 4.9<span style={{color:"#ccc"}}> (6.5K reviews) </span></p>
        <p className="price">
          <span className="amount" style={{justifyContent:"flex-end"}}>$390 / <span style={{color:"black"}}>night</span></span>
        </p>
        </div>
        
        <p className="description" style={{color:"black"}}>
          Hotel Dark Moon, 100 metres from Front Beach, Bali Motel Yung Tau
          offers accommodation with a garden, private parking and a shared..<span style={{color:"orange"}}>Read more</span>
        </p>

        <div className="features">
          <div className="feature-item"><Fabed style={{color:"black"}}/>2 Bed</div>
          <div className="feature-item">🍽 Dinner</div>
          <div className="feature-item">🛁 Hot Tub</div>
          <div className="feature-item">📶 WiFi</div>
        </div>

        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;