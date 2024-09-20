
import Button from '../Button/Button';
import './styles.ts';
import { FeedbackProps } from './types';
import { FeedbackContainer, FeedbackResultContainer, LikeResultContainer, Result } from './styles';

function Feedback({like = 0 , dislike = 0,addLike, addDislike, resetResult}:FeedbackProps) {


return (
<FeedbackContainer> 
<FeedbackResultContainer>
<LikeResultContainer> 
  <Button name="Like" onButtonClick={addLike}/>
    <Result>{like}</Result></LikeResultContainer> 
<LikeResultContainer>
    <Button name="Dislike" onButtonClick={addDislike}/>
<Result>{dislike}</Result>
</LikeResultContainer>
</FeedbackResultContainer>
<Button name="Reset results" onButtonClick={resetResult}/>
</FeedbackContainer>
)
}

export default Feedback;