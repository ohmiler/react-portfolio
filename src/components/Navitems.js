import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navitems extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activenav.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
    }
}

export default Navitems
