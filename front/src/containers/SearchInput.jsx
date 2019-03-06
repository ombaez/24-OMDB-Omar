import React from 'react';
import InputSearch from '../components/inputSeach'
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import axios from 'axios'

export default class SearchInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title:'',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange({target}){
        var val = target.value
        this.setState({
            title: val
        })
    }
    
    handleSubmit(e){
        e.preventDefault()
        axios.get('https://www.omdbapi.com/?apikey=20dac387&s=' + this.state.title)
        .then(res => console.log(res))
    }


    render() {
        console.log(this.state, '///////////')
        return (
            <InputSearch
                onChange = {this.handleChange}
                estado = {this.state.title}
                onSubmit = {this.handleSubmit}
            />
        )
    }

}

