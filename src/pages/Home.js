import DefaultFooter from 'components/DefaultFooter';
import DefaultNavbar from 'components/DefaultNavbar';
import QuoteCard from 'components/QuoteCard';
import PostCard from 'components/PostCard';
import React from 'react';
import PostSection from 'components/PostSection';
import AboutSection from 'components/AboutSection';

function Home() {
  return <div>
      <DefaultNavbar/>
      <QuoteCard />
      <PostSection />
      <AboutSection />

      <DefaultFooter />
  </div>;
}

export default Home;
