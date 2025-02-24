import React from 'react';
import './home.css';

import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="home">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #4E598C, rgba(0,0,0,0)), url(${require("../sandp.jpg")})`,
          width: "100vw",
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}

      >
        <div className="overlay">
          <h1 className="header-title">SIP & PLAY</h1>
        </div>
      </div>

      <nav className="navbar">
        <Link className="nav" to="hours" smooth={true} duration={500}>Hours</Link>
        <Link className="nav" to="location" smooth={true} duration={500}>Location</Link>
        <Link className="nav" to="reservation" smooth={true} duration={500}>Reservation</Link>
        <Link className="nav" to="how-it-works" smooth={true} duration={500}>How it Works</Link>
        <Link className="nav" to="bloom-burrow" smooth={true} duration={500}>Bloomburrow Pre-release</Link>
        <Link className="nav" to="disney-lorcana" smooth={true} duration={500}>Disney Lorcana Event</Link>
      </nav>

      {/* Hours */}
      <div id="hours" className="section">
        <div style={{ alignItems: "left", justifyContent: "flex-start" }}>
          <h1 style={{}}>WHAT ARE OUR HOURS?</h1>
          <p className='words'>New opening hours:</p>
          <p className='words'>Sunday: 10AM-11PM</p>
          <p className='words'>Mon-Thurs: 11AM-11PM</p>
          <p className='words'>Fri: 11AM-Midnight</p>
          <p className='words'>Sat: 10AM-Midnight</p>
          <p><br></br></p>
          <p className='words'>Our kitchen closes 2.5-3 hours before we close!</p>
        </div>
        <img className='image' style={{ width: '100vh', borderRadius: '5rem' }} src={require('../assets/sippy.png')} />
      </div>

      {/* Where we are */}
      <div style={{ justifyContent: 'space-between' }} id='location' className="section">
        <img className='image' style={{ width: '100vh', borderRadius: '5rem' }} src={require('../assets/map.png')} />
        <div>
          <h1>WHERE ARE WE LOCATED?</h1>
          <p className='words'>471 5th Ave.</p>
          <p className='words'>Brooklyn, NY 11215</p>
          <p className='words'>Email: sipnplaynyc@mail.com</p>
          <p className='words'>Phone: 718-971-1684</p>
        </div>
      </div>

      {/* Reservations */}
      <div id='reservation' className="section">
        <div>
          <h1>CAN I MAKE A RESERVATION?</h1>
          <div>
            <p className='words'>Reservations are open for any party size!</p>
            <p className='words'>For large parties (9+ or more people), please email us at
              sipnplaynyc@gmail.com to inquire about a reservation.</p>
            <button
              onClick={() => window.location.href = 'https://www.exploretock.com/sipnplay/'}
              style={{
                padding: '10px 20px',
                backgroundColor: '#b4bad5',
                borderRadius: '2rem',
                color: '#000',
                margin: '1rem',
                border: '1px solid #fff',
                width: '20vw',
                cursor: 'pointer',
                padding: '1rem',
                fontSize: '40px',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}
            >
              Make a Reservation!
            </button>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id='how-it-works' className="section">
        <div>
          <h1>How it works</h1>
          <p className='words'>
            Come on in with your friends and family and play boardgames from
            our collection of over 500+ games! Just $10 a person for 3 hours of
            gameplay. ($12 a person Friday-Sunday and Holidays)
          </p>
          <p className='words'>
            Play while enjoying bubble tea, coffee, beer sandwiches or salads
            and have a great time! If you want to guarantee a table, you can
            make a reservation which is $15 a person for 3 hours of gameplay.
          </p>
        </div>
      </div>

      {/* Bloomburron */}
      <div id="bloom-burrow" className="section">
        <div>
          <h1>Bloomburrow Pre-release</h1>
          <ul >
            <li className='words'>7/26 Bloomburrow Pre-release 6pm - <a className="register" href="https://square.link/u/vYewrAQG" target="_blank" rel="noopener noreferrer">Register</a></li>
            <li className='words'>7/27 Bloomburrow Pre-release 11am - <a className="register" href="https://square.link/u/v0AzfRyj" target="_blank" rel="noopener noreferrer">Register</a></li>
            <li className='words'>7/27 Bloomburrow Pre-release 5pm - <a className="register" href="https://square.link/u/pIcxnxZO" target="_blank" rel="noopener noreferrer">Register</a></li>
            <li className='words'>7/29 Bloomburrow Pre-release 6pm - <a className="register" href="https://square.link/u/yXIMpJzp" target="_blank" rel="noopener noreferrer">Register</a></li>
          </ul>
        </div>
        <img className='image' style={{borderRadius: '5rem' }}src={require("../bloom.jpg")}></img>

      </div>

      {/* Disney Lorcana */}
      <div id='disney-lorcana' className="section">
        <img className='image' src={require("../dis.jpg")} style={{borderRadius: '5rem' }}></img>
        <div style={{margin: '0 0 0 5rem'}}>
          <h1>Disney Lorcana Event</h1>
          <p className='words'>
            Want to play the new Disney trading card game? We're hosting a
            Lorcana learn to play event on July 22nd 6pm! Just grab a starter
            deck at Sip & Play and we'll have players on hand to teach you.
          </p>
          <p className='words'>Excited to see you there!</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
