import React, { Component } from 'react';
import { fetchAstrologyList } from './Fetches.js';

export default class Listpage extends Component {

    state = {
        astrologyData: [],
        loading: true
    }


    componentDidMount = async () => {

        const astrologyData = await fetchAstrologyList()
        this.setState({ astrologyData })
    }


    render() {
       const { astrologyData } = this.state
        return (
            <div>
            {
              astrologyData.length > 0
              ? astrologyData.map((astrology) => 


                 <div className='outerAstrologyList'>   
                     <div  className='astrologyList'>
                    <h2>{astrology.sign}</h2>
                    <p>Ruling Planet: {astrology.ruling_planet}</p>
                    <p>Fixed Mode? {astrology.mode_fixed.toString()}</p>
                    <p>Chill Level: {astrology.chill_level}</p>
                     </div>
                </div>)
                    : 'loading'
              
            }              
            </div>


        )
    }
}


