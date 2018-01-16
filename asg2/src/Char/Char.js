import React from 'react';
import './Char.css';

const char = (props) =>{
    const style ={
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }

    return(
        <div style = {style} onClick={props.clicked}>
        <ul>
            <li>
            <p>{props.character}</p>
            </li>
        </ul>
        </div>
    )
}

export default char;