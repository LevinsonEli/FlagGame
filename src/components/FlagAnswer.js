import React from 'react';
import StyledButton from './StyledButton';
import '../styles/FlagAnswer.css';

const FlagAnswer = ({correct, answer, onNext}) => (
  <div className='flag-answer'>
    {correct ?
      `Correct!: ${answer}` :
      `Incorrect! The Answer Is: ${answer}`}
    <StyledButton text="NEXT" onClick={onNext} />
  </div>
);

export default FlagAnswer;
