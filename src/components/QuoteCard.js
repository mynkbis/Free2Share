import React from 'react';
import ContactCard from './landing/ContactCard';
import StatusCard from './landing/StatusCard';
import axios from 'axios';
import { useState } from 'react';


function QuoteCard() {

  const [Quote, setQuote] = useState("");

  axios.get("https://soal-capstone-project.herokuapp.com/getQuote", {
  
    }).then(function (response) {
      console.log("Quote : ",response.data.quote);
     setQuote(response.data.quote);
    })
      .catch(function (error) {
        console.log(error);
      });
  

  return   <div className="text-center my-8">
    <StatusCard title="Quote of the Day" children = {Quote}>
  
    </StatusCard>
  </div>;
}

export default QuoteCard;
