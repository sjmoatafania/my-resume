import React, { Component } from 'react';

import data from '../data.json';
import Fullpage from '../components/Fullpage';
import SkillCard from '../components/SkillCard';

import './SkillSection.css';


class SkillSection extends Component {
    render() {

        return (
            <Fullpage className="third">
                <h3>{data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {data.sections[1].items.map(eachSkill => {
                        return (
                            <SkillCard skill={eachSkill} ></SkillCard>
                        )
                    })}
                </div>
            </Fullpage>
        )
    }
}
export default SkillSection;