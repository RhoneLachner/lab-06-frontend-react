import React, { Component } from 'react';
import { fetchAstrology } from './Fetches.js';

export default class Listpage extends Component {

    state = {
        astrologyData: [],
        loading: true
    }


    componentDidMount = async () => {

        const astrology = await fetchAstrology()
        this.setState({ astrology })
    }


    render() {
       
        return (
            <div className='astrologyData'>
            {
              this.state.loading
              ? <div>Loading</div>
              : this.state.astrologyData.map((astrology) => 
              <div className='astrologyItem' key={astrology.id}>
                    <h2>{astrology.sign_id}</h2>
                    <p>Ruling Planet: {astrology.ruling_planet}</p>
                    <p>Fixed Mode? {astrology.mode_fixed}</p>
                    <p>Chill Level: {astrology.chill_level}</p>
              </div>
              
                )}              
            </div>


        )
    }
}

