import Feedback from "components/Feedback/Feedback";
import { useState } from "react";



export default function Homework07 () {
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
  return (<Feedback like={like}
  dislike={dislike}
  addLike={addLike}
  addDislike={addDislike}
  resetResult={resetResult} />)
}