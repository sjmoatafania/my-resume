import React, { Component } from 'react';

import data from '../data.json';
import Fullpage from '../components/Fullpage';

import './AboutSection.css';

class AboutSection extends Component {
    render() {

        return (
            <Fullpage className="secound">
                <h3>{data.sections[0].title}</h3>
                <div className="paragraph">
                    {data.sections[0].items.map(p => {
                        return <p key={data.sections}>{p.content}</p>
                    })}
                </div>
            </Fullpage>
        )
    }
}
export default AboutSection;