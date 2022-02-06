import React from 'react';
import Image from "@material-tailwind/react/Image";
import H3 from '@material-tailwind/react/Heading3';
import AboutImg from '../assets/img/teamwork.jpeg';
import Paragraph from '@material-tailwind/react/Paragraph';
import Counter from 'components/landing/Counter';

function AboutSection() {
  return <div>

      <div className='flex' style={{"padding":" 100px 0px"}}>

          <div className='md:w-6/12' style={{"margin-right":"50px"}}> 
              <Image src={AboutImg} />
          </div>

          <div className=' md:w-6/12 ' style={{"margin":"50px"}}>
              <H3>About Us:</H3>

              <Paragraph>   
              Welcome to The Free2Share Network™! We are a grassroots & entirely nonprofit movement of people who are giving and getting stuff for free in their own Towns. It's all about reuse and keeping good stuff out of landfills. Membership is free. And now you can also set up your own, smaller local community for gifting and lending of items with just your friends! Register now.
              </Paragraph>
              <Counter />

          </div>

      </div>


  </div>;
}

export default AboutSection;
