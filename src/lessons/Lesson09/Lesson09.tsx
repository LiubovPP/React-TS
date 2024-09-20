import { ChangeEvent, useState } from "react";
import { 
  InputExample,
  Lesson09Component,
  Result,
   } from "./styles";

function Lesson09() {

  const [inputValue, setInputValue]=useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement  >)=>{
  setInputValue(event.target.value);
  }

 console.log(inputValue);

  return <Lesson09Component >
  
    <InputExample name="example" placeholder="example text" onChange={onChangeInput}/>
    <Result>{inputValue}</Result>
    </Lesson09Component>
}

export default Lesson09;