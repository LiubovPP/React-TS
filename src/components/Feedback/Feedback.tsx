import { useState } from 'react';
import Button from '../Button/Button';
import './styles.css';

function Feedback() {
const [like, setLike] =useState<number>(0);
const [dislike, setDislike] =useState<number>(0);

const addLike = ():void => {
  setLike((prevLike)=>prevLike+1)
};

const addDislike = ():void => {
  setDislike((prevDislike)=>prevDislike+1)
};

const resetResult = ():void => {
  setLike(0);
  setDislike(0);
};

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