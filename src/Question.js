import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (question) => {
  const [showInfo, setShowInfo] = useState(false)
  const { title, info} = question;
  
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
          {
            showInfo===true?<AiOutlineMinus/>:<AiOutlinePlus/>
          }
        </button>
      </header>
      {
        showInfo===true?<p>{info}</p>:''
      }
    </article>
  );
};

export default Question;
