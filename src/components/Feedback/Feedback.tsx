import { useState } from 'react';
import Button from '../Button/Button';
import './styles.css';
import { FeedbackProps } from './types';

function Feedback({like = 0 , dislike = 0,addLike, addDislike, resetResult}:FeedbackProps) {


return (
<div className='feedback-container'> 
<div className='feedback-result-container'>
<div className='like-result-container'> 
  <Button name="Like" onButtonClick={addLike}/>
    <div className='result'>{like}</div></div> 
<div className='like-result-container'>
    <Button name="Dislike" onButtonClick={addDislike}/>
<div className='result'>{dislike}</div>
</div>
</div>
<Button name="Reset results" onButtonClick={resetResult}/>
</div>
)
}

export default Feedback;