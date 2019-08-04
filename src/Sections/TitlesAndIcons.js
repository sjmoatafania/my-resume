import React, { Component } from 'react';
import { Link, Element } from 'react-scroll'

import data from '../data.json';
import Fullpage from '../components/Fullpage';
import { SocialIcon } from 'react-social-icons';
import Down from '../components/Down';

import './TitleAndIcons.css';
import Navigation from '../components/Navigation.js';
import SnowStorm from 'react-snowstorm';

class TitlesAndIcons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "white",
            iconDown: data.icons.down,
            magicIcon: data.icons.magicwand,
            background:"",
            isVisible: false
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState({
            color: this.state.color === "white" ? "yellow" : "white",
            iconDown: this.state.iconDown === data.icons.yellowDown ? data.icons.down : data.icons.yellowDown,
            magicIcon: this.state.magicIcon === data.icons.magicwand ? data.icons.yellowMagic : data.icons.magicwand,
            isVisible: this.state.isVisible === false ? true : false,
            background: data.backgroundImg.backFirst,

        })
    }
   
    render() {
        let props = {
            color:this.state.color,
            magicIcon:this.state.magicIcon,
            changeColorHandler:this.changeColor
            }

        let snow;
        if (this.state.isVisible) {
            snow = <div><SnowStorm /></div>
        }
        return ([
            <div>
                <Navigation {...props}/>
            </div>,
            <div>
                <Fullpage className="first" style={{backgroundImage: this.state.background}}>
                    <h1 className="title" style={{ color: this.state.color }}>{data.title} </h1>
                    <div>
                        <h2 style={{ color: this.state.color }}>{data.subtitle}</h2>
                    </div>
                    <div className="icons-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icons" key={data.links[key]}>
                                        <SocialIcon url={data.links[key]} />
                                    </div>
                                );
                            })}
                    </div>

                    {snow}

                </Fullpage>
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}>
                    <Down style={{ color: this.state.color }}
                        icon={this.state.iconDown}
                    />
                </Link>
                <Element name="about" className="element"></Element>
            </div>

        ]
        );
    }
}
export default TitlesAndIcons;