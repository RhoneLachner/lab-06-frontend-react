
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
    this.setState({ astrologyData: response.body, loading: false });
  }

  render() {
    console.log(this.state.astrologyData)
    return (
  
      <div className='astrologyData'>
            {
              this.state.loading
              ? <div>Loading</div>
              : this.state.astrologyData.map((astrology) => 

              <div className='astrologyItem' key={astrology.id}>
                    <h2>{astrology.sign}</h2>
                    <p>Ruling Planet: {astrology.ruling_planet}</p>
                    <p>Fixed Mode? {astrology.mode_fixed}</p>
                    <p>Chill Level: {astrology.chill_level}</p>
              </div>
              
                )}
                
     </div>

    )}
    }
          
