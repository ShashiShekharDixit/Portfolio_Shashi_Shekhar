import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
   <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>
        As a passionate web designer, I craft immersive digital experiences that seamlessly blend aesthetics with functionality. My expertise lies in designing intuitive user interfaces and engaging user experiences. Proficient in HTML, CSS, and JavaScript, I bring ideas to life with precision and creativity. Additionally, I leverage industry-leading tools like Adobe Photoshop and Illustrator to create visually stunning designs.
      </span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>I specialize in designing user-friendly interfaces that enhance the digital experience. By combining creativity with usability, I craft designs that engage and delight users.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>From concept to execution, I create responsive, visually compelling, and high-performing websites tailored to client needs, ensuring seamless navigation and interaction.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>Crafting modern, intuitive, and sleek app designs that elevate user engagement and provide an unparalleled mobile experience.</p>
            </div>
        </div>
      </div>
   </section>
  )
}

export default Skills;
