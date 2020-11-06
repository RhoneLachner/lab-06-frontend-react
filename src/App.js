
import React from 'react';
import Fetch from 'superagent';
import './App.css';

export default class App extends React.Component {

  state = {
      astrologyData: [],
      loading: true
  }


  componentDidMount = async () => {
      this.fetchAstrology()
  }

  fetchAstrology = async () => {
    this.setState({
      loading: true
    });
    const response = await Fetch.get(`https://sheltered-reaches-14727.herokuapp.com/astrology`);
    
  }

  render() {
    console.log(this.state.astrologyData)
    return (
  
      

    )}
    }
          
