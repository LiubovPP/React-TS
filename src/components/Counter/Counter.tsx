import './styles.css';

import Button from '../../components/Button/Button';

function Counter ({countValue, onMinusClick, onPlusClick}:any) {

  return(
    <div className='counter-wrapper'>
      <div className='button-control'>
        <Button onButtonClick={onMinusClick} name='-'/>
      </div>
      
        <p>{countValue}</p>
        <div className='button-control'>
      <Button onButtonClick={onPlusClick} name='+'/>  
      </div>
    
    </div>
  )
}

export default Counter;