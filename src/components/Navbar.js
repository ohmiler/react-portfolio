import React, { Component } from 'react'
import Navitems from './Navitems'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        }) 
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" activenav={this.activeitem}></Navitems>
                    <Navitems item="About" tolink="/about" activenav={this.activeitem}></Navitems>
                    <Navitems item="Education" tolink="/education" activenav={this.activeitem}></Navitems>
                    <Navitems item="Skills" tolink="/skills" activenav={this.activeitem}></Navitems>
                    <Navitems item="Contact" tolink="/contact" activenav={this.activeitem}></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;