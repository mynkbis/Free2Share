import React from 'react';
import Image from "@material-tailwind/react/Image";
import H3 from '@material-tailwind/react/Heading3';
import AboutImg from '../assets/img/teamwork.jpeg'

function AboutSection() {
  return <div>

      <div className='flex'>

          <div className='md:w-6/12'> 
              <Image src={AboutImg} />
          </div>

          <div className='space-x-2 md:w-6/12 '>
              <H3>This is the title of About Us </H3>
              <p>This is the Description of About us Section</p>
          </div>

      </div>


  </div>;
}

export default AboutSection;
