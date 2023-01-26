import {FcUndo, FcRedo} from 'react-icons/fc';
import './styles.css';

export const Botoes = ({HandleClickUndo, HandleClickRedo}) => {
    return(
        <div className="container">
            <button onClick={HandleClickUndo}><FcUndo /></button>
            <button onClick={HandleClickRedo}><FcRedo /></button>
        </div>
    )
}