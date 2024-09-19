import { BoxComponent,
  Lesson08Component,
  ButtonComponent,
  InfoBoxComponent
 } from "./styles";

function Lesson08() {
   // 2 подход - inline styles
  // const styleObject = {
  //   fontSize: '42px',
  //   color: 'red'
  // }
  return <Lesson08Component >
    <BoxComponent>My first emotion block</BoxComponent>
    <ButtonComponent >Custom button</ButtonComponent>
    <ButtonComponent mainButton ={false}>Custom button</ButtonComponent>
    <InfoBoxComponent>Info </InfoBoxComponent>
    {/* <p style={styleObject}>Hello</p>
    <p style={styleObject}>Bye</p> */}

    </Lesson08Component>
}

export default Lesson08;