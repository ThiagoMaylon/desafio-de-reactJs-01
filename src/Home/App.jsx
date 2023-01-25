import { useState } from 'react';
import { Ball } from '../components/Ball';
import './style.css';

export const App = (event) =>{

  const [ball, setBall] = useState(null);

  function HandleClick(event) {
    setBall(<Ball left={event.clientX} top={event.clientY}/>);

  }

  return (
   <div className="tela" onClick={HandleClick}>
      {ball}
   </div>
  );
}


