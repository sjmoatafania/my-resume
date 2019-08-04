import React, { Component } from 'react';
import './Fullpage.css';

class Fullpage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={`fullpage ${this.props.className || ''}`} style={{backgroundImage: this.props.backgroundImg}}>
                {children}
            </div>
        )
    }
}
export default Fullpage;