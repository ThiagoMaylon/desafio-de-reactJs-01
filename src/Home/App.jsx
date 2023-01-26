import { useState } from 'react';
import { Ball } from '../components/Ball';
import { Botoes } from '../components/Botoes';
import './style.css';

export const App = () =>{
  const [ball, setBall] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const HandleClick = (event) => {
    setBall([...ball, <Ball left={event.clientX} top={event.clientY}/>]);
    setRedoStack([...redoStack, ball]);
    setUndoStack([...undoStack, ball]);
  }

  const HandleClickUndo = () => {
    if(undoStack.length === 0) return;
    const previuState = undoStack.pop();

    setRedoStack([...redoStack, ball]);
    setBall(previuState);
  }

  const HandleClickRedo = () => {
    if(redoStack.length === 0) return;

    const nextState = redoStack.pop();
    setUndoStack([...undoStack, ball]);
    setBall(nextState);

  }

  return (
    <div className="main">
      <Botoes HandleClickRedo={HandleClickRedo } HandleClickUndo={HandleClickUndo} />
      <div className="tela" onClick={HandleClick}>
        {ball.map((balls, index) => (
          <div key={index}>{balls}</div>
        ))}
      </div>
    </div>
  );
}


