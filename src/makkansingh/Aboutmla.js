import React from 'react';
import '../makkansingh/aboutmla.css';
import mlawithoutbackgroung from '../assets/mla without backround.png'
import waterdrop from '../assets/water drop.jpg'
import infrastructure from '../assets/infrastructure.png'
import health from '../assets/health.jpg'
import familieserved from '../assets/families served.jpg'
import projects from '../assets/projects.jpg'
import welfareschemes from '../assets/welfare schemes.jpg'

function Aboutmla() {
  return (
    <>
      <div className='body1'>
        <p className='bio'>Biography archive</p>
        <h1 className='leader'> A Journey Of Leadership</h1>
        <p className='public'>"Public service is a sacred commitment to ensure every citizen of makkan singh walks on the path of progress."</p>
      </div>
      <div className='pe'>
        <img src={mlawithoutbackgroung} alt='' height="600px" className='blur'/ >
        <div className='content'>
          <div className='peo'>
            <h1>A Vision for the</h1>
            <h1 className='fo'>people</h1>
          </div>

          <p className='peop'>We focus on people-centric governance, ensuring every initiative directly benefits the community. My commitment is to build a modern, transparent, and welfare-driven makan singh raj thakur that serves as a benchmark for regional development.</p>
          <div className='posp'>
            <div className='drop1'>
              <div className='drop'>
                <img src={waterdrop} alt='' width="60px" className='water' />
                <h3 className='water1'>Water & Irrigation</h3>
                <p>Championing projects that brought water, hope and prosperity to farmers.</p>
              </div>
              <div className='inf'>
                <img src={infrastructure} alt='' className='infra' width="60px" />
                <h3 className='infra1'>infrastructure</h3>
                <p>Building roads, bridges and connectivity for a stronger Kandukuru</p>
              </div>
              <div className='hea'>
                <img src={health} alt='' width="60px" className='he' />
                <h3 className='he1'>Health care</h3>
                <p>Improving healthcare facilities and ensuring better lives for all.</p>
              </div>
            </div>

          </div>
        </div>

        

      </div>
      <div className='news'>
        <div className='fm'>
          <img src={familieserved} alt='....' width="400px" height="250px" className='family' />
          <h2>50,000+</h2>
          <p> Families served</p>
          </div>
          <div className='proj'>
          <img src={projects} alt='....' width="400px" height="250px" className='project'/>
          <h2>25+</h2>
          <p>community projects</p>
          </div>
          <div className='wf'>
          <img src={welfareschemes} alt='....' width="400px" height="250px" className='welfare'/>
          <h2>100+</h2>
          <p>welfare schemes</p>
          </div>
        </div>
    </>
  )
}

export default Aboutmla;
