import React from 'react';
import './Down.css';


const Down = (props) => {
    return (
        <div className="scroll-to-next">
            <div className="arrow bounce" >
                <div className="scroll-text">Click Me</div>
                <img src={props.icon} alt=""/>
            </div>
        </div>
    )
}

export default Down



