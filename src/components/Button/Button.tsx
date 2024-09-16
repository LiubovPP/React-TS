import'./styles.css';
import { ButtonProps } from './types';

function Button ({name, type='button', onButtonClick}: ButtonProps){
  return (<button className="button-component" type={type} onClick={onButtonClick}>
    {name}
       </button>
       );
}
export default Button;

// import './styles.css';

// function Button ({ buttonName = "Get data", isPrimaryButton = false}) {
//   // 1 вариант
//   // const buttonClass = isPrimaryButton ?
//   // "main-button primary-button":
//   // "main-button secondary-button"


//   // 2 вариант
//   const buttonClass = `main-button ${
//     isPrimaryButton ? "primary-button" : "secondary-button"
//   }`;

//   return <button className={buttonClass}>
//     {buttonName}
//     </button>;
// }

// export default Button;
