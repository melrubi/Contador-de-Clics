import './App.css';
import Button from './components/Button';
import Count from './components/Count';
import freeCodeCamp from './images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const click =() => {
    setNumClicks(numClicks + 1);
  };

  const restartCount =() => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='image-freeCodeCamp'>
        <img 
          className='logo'
          src={freeCodeCamp}
          alt='Logo'
        />
      </div>
      <div className='container'>
        <Count numClicks={numClicks}/>
        <Button
          text='Click'
          isButtonClick={true}
          click={click}
        />
        <Button
          text='Restart'
          isButtonClick={false}
          click={restartCount}
        />
      </div>
    </div>
  );
}

export default App;
