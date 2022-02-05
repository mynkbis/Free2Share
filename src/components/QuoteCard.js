import React from 'react';
import ContactCard from './landing/ContactCard';
import StatusCard from './landing/StatusCard';
import axios from 'axios';
import { useState } from 'react';


function QuoteCard() {

  const [Quote, setQuote] = useState("");
  if(Quote === ""){
  axios.get("https://soal-capstone-project.herokuapp.com/getQuote", {
  
    }).then(function (response) {
      console.log(response.data.quote);
     setQuote(response.data.quote);
    })
      .catch(function (error) {
        console.log(error);
      });
    }

  return <div>
    <StatusCard title="Quote of the Day">
    {Quote}
    </StatusCard>
  </div>;
}

export default QuoteCard;
