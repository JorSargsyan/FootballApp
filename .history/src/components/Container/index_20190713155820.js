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
        countries: []
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };


    componentDidMount() {
        let config = {
            headers: {
              "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
              "X-RapidAPI-Key":"afc6347074msh5602bdc3ba130d0p170b44jsn6e420664b59f"
            }
          }

        axios.get(`https://api-football-v1.p.rapidapi.com/v1/countries`,{},config)
            .then(res => {
                const countries = res.data;
                this.setState({ countries });
            })
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="classes.root">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
                <ul>
                    {this.state.countries.map(countries => <li>{countries.country}</li>)}
                </ul>
            </div>
        )
    }
}

