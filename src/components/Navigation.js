import React, { Component } from 'react'
import { Link, Element } from 'react-scroll'

import './Navigation.css'


class Navigation extends Component {


    render() {
        return (
            <div className="navigation">
                <nav className="stiky" style={{
                    backgroundColor: "rgba(250, 250, 250, 0)"
                }}>
                    <div className="magic-wand magic-bounce" onClick={this.props.changeColorHandler} >
                        <img className="" src={this.props.magicIcon} alt="MagicWand" ></img>
                        <div className="magic-text">Color Me</div>
                    </div>
                    <div className="menu">
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onSetActive={this.handleSetActive}>

                            <div className="menu__item active" style={{ color: this.props.color }}>About</div>
                        </Link>
                        <Element name="about" className="element"></Element>
                        <Link activeClass="active"
                            to="skill"
                            spy={true}
                            smooth={true}
                            offset={1260}
                            duration={500}
                            onSetActive={this.handleSetActive}>

                            <div className="menu__item" style={{ color: this.props.color }}>Skill</div>
                        </Link>
                        <Element name="skill" className="element"></Element>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation