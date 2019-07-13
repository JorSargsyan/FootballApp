import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


export default class Container extends Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <h1>Main Component</h1>
            </div>
        )
    }
}
