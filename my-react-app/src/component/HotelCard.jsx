import React from "react";
import "./HotelCard.css";
import { AiOutlineArrowLeft} from 'react-icons/ai';
import {FaBookmark} from 'react-icons/fa';
import {FaShare} from 'react-icons/fa';

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img
          src="https://th.bing.com/th/id/OIP.n6iViUQC6AVJBOe3gopm-QHaE8?w=262&h=180&c=7&r=0&o=5&pid=1.7"></img>
        
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
        <p className="location">📍 Paris, France</p>
        <p className="price">
          <span className="amount">$390</span>/night
        </p>
        <p className="rating">⭐ 4.9 (6.5K reviews)</p>
        <p className="description">
          Hotel Dark Moon, 100 metres from Front Beach, Bali Motel Yung Tau
          offers accommodation with a garden, private parking and a shared...
        </p>

        <div className="features">
          <div className="feature-item">🛏 2 Bed</div>
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