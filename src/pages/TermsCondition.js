import React from 'react';
import SimpleFooter from 'components/SimpleFooter';
import Container from 'components/login/Container';

import CardBody from '@material-tailwind/react/CardBody';


const termsCondition=()=> {

 
  return <div>
  <Container>
<CardBody>
<h1><strong>Aggreement</strong></h1>
<h6>Read it carefully</h6>
<span>Data</span>
</CardBody>

</Container>
<SimpleFooter/>
  </div>;
}

export default termsCondition;
