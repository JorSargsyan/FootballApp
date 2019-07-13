import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import axios from 'axios';


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


    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

    render() {
        const { selectedOption } = this.state;
        return (
            <div  className="classes.root">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        )
    }
}

