import { useState } from 'react';
import { Ball } from '../components/Ball';
import './style.css';

export const App = () =>{
  const [ball, setBall] = useState([]);

  const HandleClick = (event) => {
    setBall([...ball, <Ball left={event.clientX} top={event.clientY}/>]);

  }
  return (
   <div className="tela" onClick={HandleClick}>
      {ball.map((balls, index) => (
        <div key={index}>{balls}</div>
      ))}
   </div>
  );
}


