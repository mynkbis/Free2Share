import DefaultFooter from 'components/DefaultFooter';
import DefaultNavbar from 'components/DefaultNavbar';
import QuoteCard from 'components/QuoteCard';
import React from 'react';

function Home() {
  return <div>
      <DefaultNavbar/>
      <QuoteCard />
      <DefaultFooter />
  </div>;
}

export default Home;
