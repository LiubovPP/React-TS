export interface FeedbackProps {
  like?: number, 
  dislike?: number,
  addLike: ()=> void, 
  addDislike: ()=> void,
  resetResult: ()=> void
}