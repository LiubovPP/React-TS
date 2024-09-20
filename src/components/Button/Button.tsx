import { ButtonCompenent } from './styles';
import { ButtonProps } from './types';

function Button ({name, type='button', onButtonClick, disabled=false}: ButtonProps){
  return (<ButtonCompenent disabled={disabled} type={type} onClick={onButtonClick}>
    {name}
       </ButtonCompenent>
       );
}
export default Button;