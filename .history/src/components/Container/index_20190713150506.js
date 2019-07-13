import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';


export default class Container extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>Main Component</h1>
            </div>
        )
    }
}
