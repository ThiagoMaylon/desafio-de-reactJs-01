export const Ball = ({left, top}) => {

    const myStyle ={
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        height: `${50}px`,
        width: `${50}px`,
        background: '#61dbfb',
        borderRadius: `${50}%`,
    }
    return(
        <div style={myStyle}>

        </div>
    )
}