import { useState } from 'react';
import './App.css';
import { Button } from './components';

function App() {
  const [count, setCount] = useState(0);
  const countMore = () => {
    setCount( (count) => count + 1 );
  }

  // let porcentaje: number; 
  // porcentaje = (2.24/13.21) * 100;
  // porcentaje = Math.round(porcentaje);
  
  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p>El porcentaje del curso es {porcentaje} %</p>
    </>
  )
}

export default App