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

        axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${selectedOption.value}/${2018}`,config)
        .then(res => {
            let countries = res.data.api.countries;
            countries = countries.map(i=>{return {label:i.country,value:i.code}});
            this.setState({ countries });
        })

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
                let countries = res.data.api.countries;
                countries = countries.map(i=>{return {label:i.country,value:i.code}});
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

