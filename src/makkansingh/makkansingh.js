import React from "react";
import "../makkansingh/mla.css"
import thakur from '../assets/thakur.jpg'
// import thakur1 from '../assets/thakur1.jpg'
import thakur2 from '../assets/thakur 2.jpg'
import thakur3 from '../assets/thakur 3.jpg'
import thakur4 from '../assets/thakur 4.jpg'
import thakur5 from '../assets/thakur 5.jpg'
import thakur6 from '../assets/thakur 6.jpg'
import thakur7 from '../assets/thakur 7.jpg'
import thakur8 from '../assets/thakur 8.jpg'
import thakur9 from '../assets/thakur 9.jpg'
import thakur10 from '../assets/thakur10.png'
import thakur11 from '../assets/thakur11.jpg'
import thakurfacebook from '../assets/thakur facebook.jpeg'
import thakurinstagram from '../assets/thakur instagram.jpeg'
import thakuryoutube from '../assets/thakur youtube.jpeg'
import thakurtwitter from '../assets/thakur twitter.jpeg'
import facebooklogo from '../assets/facebook logo.png'
import instagramlogo from '../assets/instagram logo.jpg'
import youtubelogo from '../assets/yotube logo.jpg'
import twitterlogo from '../assets/twitter logo.jpg'
// import { Navigate, Link, useNavigate } from "react-router-dom";




function Makkan() {

   // const navigate = useNavigate();
     const opengoogle= () => {
      window.open('https://www.google.com', '_blank');
};
  

   return (
      <>
         <div className="body">

            {/* <div className="container">
               <img src={thakur} alt="" width="100px" className="mlaphoto" height="80px" />
               <div>

                  <h1 className="mla">Makkan Singh </h1>
                  <p className="mla1">Raj Thakur</p>
               </div>
               <div className="link">
                  <a href="#" className="home">HOME</a>
                  <Link to='/about'>About Us</Link>
                  <select className="ach">
                     <option value=""> Achievement</option>
                     <option value="development">DEVELOPMENT</option>
                     <option value="cmr">CMR FUNDS</option>
                  </select>
                  <select className="mul">
                     <option value=""> Multimedia</option>
                     <option value="gallery">GALLERY</option>
                     <option value="videos">VIDEOS</option>
                     <option value="press">press</option>

                  </select >
                  <a href="#" className="aco">ACOMPLISMENT</a>
                  <a href="#" className="con">CONTACT US</a>
                  <div className="bu">
                     <button className="main">LOGIN</button>
                  </div>
               </div>

            </div> */}
            <img src={thakur5} alt="" className="thakur" />

            <div className="drive">
               <h1>campaign that</h1>
               <h1 className="orange">Drive Change.</h1>

            </div>
            <p className="pa">Join our mission to transform Kandukur through focused initiatives that address the most pressing needs </p>
            <p className="paaa">of your community</p>
            <div className="cardflex">
               <div className="card1">
                  <img src={thakur2} alt="" className="revanth" height="170px" width="300px" />
                  <h1>Revanth reddy campaign</h1>
                  <p>Peddapalli: The district Congress president Makkan Singh Raj Thakur hit at the Singareni management and local MLA for failing to address the problems </p>
               </div>
               <div className="card2">
                  <img src={thakur3} alt="" width="300px" className="water" />
                  <h1>Drinking water</h1>
                  <p>రామగుండంలో తాగునీటి కోసం 90 కోట్ల నిధులు మంజూరు | MLA Makkan Singh Raj Thakur About Ramagundam Development</p>
               </div>
               <div className="card3">
                  <img src={thakur4} alt="" className="praja" width="300px" height="170px" />
                  <h1>People's Governance</h1>
                  <p>The term Praja Palana refers to governance and public welfare initiatives aimed at delivering government services and welfare schemes directly to citizens in Telangana.</p>
               </div>
            </div>
            <div className="wardissue">
               <img src={thakur} alt="" width="200px" height="100px" />
               <div className="report">
                  <h1>Have an issue in your ward?</h1>
                  <p className="p1" >Reporting issues helps us prioritize our campaign efforts and serve you better.</p>
               </div>
               <button className="repbtn" onClick={opengoogle}>Report An Issue</button>
            </div>
            <div className="cont">
               <div className="content">
                  <h1 className="legacy">A Legacy of</h1>
                  <h1 className="excel">Excellence.</h1>
                  <p>Recognized for humanitarian leadership and dedication to sustainable development projects in the region.</p>
               </div>
               <div className="tha">
                  {/* <img src={thakur6} alt=""/>
            <img src={thakur7} alt=""/>
            <img src={thakur8} alt=""/>
            <img src={thakur9} alt=""/> */}
                  <img src={thakur10} alt="" width="600px" />
               </div>
            </div>
            <div className="pulse">
               <h1>Political</h1>
               <h1 className="pulse1">Pulse</h1>
            </div>
            <div className="hmtv">
               <div className="thakur11">
                  <img src={thakur11} alt="" width="600" />
               </div>
               <div className="col">
                  <div className="press">
                     <h2 className="release">press release</h2>
                     <p className="con">Congress supports farmers with financial aid, irrigation projects, and better crop development schemes.

                        Events</p>

                  </div>
                  <div className="events">
                     <h2 className="release1">Events</h2>
                     <p className="con1">MLA makkan singh raj thakur has been actively participating in local events, including weddings and community gatherings</p>
                  </div>
               </div>
            </div>
            <div className="bag">
               <div className="bag1">
                  <h1 className="ha1">Healthcare</h1>
                  <p className="pa1">congress focuses on better healthcare services with improved hospitals and affordable treatment for people.</p>
               </div>
               <div className="bag2">
                  <h1 className="ha2">Jobs</h1>
                  <p className="pa2">Congress focuses on creating jobs for youth through industries, IT growth, and skill development programs.</p>

               </div>
               <div className="bag3">
                  <h1 className="ha3">Local Reviews </h1>
                  <p className="pa3">Ramagundam MLA raj thakur makkan singh has been actively conducting local reviews and resolving maintenance issues.

                  </p>
               </div>
            </div>
            <div className="peo">
               <h1 className="peo1">Moments with the</h1>
               <h1 className="peo2">People</h1>
            </div>
            <div className="slider">
    <div className="roll">
    <img src={thakur6} alt="" />
    <img src={thakur7} alt="" />
    <img src={thakur8} alt="" />
    <img src={thakur6} alt="" />
    <img src={thakur9} alt="" />

    {/* Duplicate */}
    <img src={thakur6} alt="" />
    <img src={thakur7} alt="" />
    <img src={thakur8} alt="" />
    <img src={thakur6} alt="" />
    <img src={thakur9} alt="" />
    {/* Duplicate */}
    <img src={thakur6} alt="" />
    <img src={thakur7} alt="" />
    <img src={thakur8} alt="" />
    <img src={thakur6} alt="" />
    <img src={thakur9} alt="" />
</div>
</div>
            <div id="btn">
               <button>VIEW FULL JOURNEY</button>
            </div>
            <div className="follow">
               <h1>Follow</h1>
               <h1 className="text">MAKKAN SINGH RAJ THAKUR.</h1>
            </div>
            <div className="accounts">
               <div className="facebook">
               <p className="fb">FACEBOOK</p>
               <img src={thakurfacebook} alt="" width="300px" height="200px" className="fb1"/>
               </div>
               <div>
                  <p className="in">INSTAGRAM</p>
               <img src={thakurinstagram} alt="" width="300px" height="200px" className="in1"/>
               </div>
               <div>
                  <p className="yt">YOUTUBE</p>
               <img src={thakuryoutube} alt="" width="300px" height="200px" className="yt1"/>
               </div>
               <div>
                  <p className="tw">TWITTER</p>
               <img src={thakurtwitter} alt="" width="300px" height="200px" className="tw1"/>
               </div>
            
            </div >
            
            <footer  className="foot">
               <img src={thakur} alt="" width="150px"/>
               <div>
                  <h1 className="singh">Makkan singh</h1>
                  <h1 className="raj">Raj thakur</h1>
               </div>
               <div className="social">
               <img src={facebooklogo} alt="" width="40px"/>
               <img src={instagramlogo} alt="" width="40px"/>
               <img src={youtubelogo} alt="" width="40px"/>
               <img src={twitterlogo} alt="" width="40px"/>
               </div>
            </footer>
            
         </div>


      </>
   )
} export default Makkan;