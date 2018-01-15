import React from 'react';

const validationComponent = (props)=>{
//5 is a minimum length
    let validationMessage= 'Text long enough';

    if(props.len <= 5){
    validationMessage = 'Text too short';
    }
    return(
    <p>{validationMessage}</p>
    ) 
}

export default validationComponent;