import React from 'react';
import Image from "@material-tailwind/react/Image";
import H3 from '@material-tailwind/react/Heading3';
import AboutImg from '../assets/img/teamwork.jpeg';
import Paragraph from '@material-tailwind/react/Paragraph';

function AboutSection() {
  return <div>

      <div className='flex' style={{"padding":" 100px 0px"}}>

          <div className='md:w-6/12' style={{"margin-right":"50px"}}> 
              <Image src={AboutImg} />
          </div>

          <div className=' md:w-6/12 ' style={{"margin":"50px"}}>
              <H3>This is the title of About Us </H3>

              <Paragraph>This is the Description of About us Section</Paragraph>
          </div>

      </div>


  </div>;
}

export default AboutSection;
