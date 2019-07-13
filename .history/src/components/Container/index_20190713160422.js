import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import axios from 'axios';


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

        axios.get(`https://api-football-v1.p.rapidapi.com/v2/countries`,config)
            .then(res => {
                const countries = res.data.api.countries;
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
                    options={this.state.countries}
                />
            </div>
        )
    }
}

