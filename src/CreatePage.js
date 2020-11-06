import React, { Component } from 'react'
import { fetchSigns, createAstrology, fetchAstrologyList} from './Fetches';
import request from 'superagent';

const userFromLocalStorage = {
    userId: 1
};


export default class CreatePage extends Component {

state = {
    signName: '',
    rulingPlanet: '',
    modeFixed: true,
    chillLevel: 0
}

             componentDidMount = async () => {
                const allSigns = await fetchAstrologyList();
                
                this.setState({ allSigns });
            }

            handleSubmit = async (e) => {
                e.preventDefault();


     //BUILDS NEW ASTROLOGY ITEM USING FORM DATA FROM THE USER AND THEIR LOCAL STORAGE
                await createAstrology({
                        sign: this.state.signName,
                        ruling_planet: this.state.rulingPlanet,
                        mode_fixed: this.state.modeFixed,
                        chill_level: this.state.chillLevel,
                        owner_id: userFromLocalStorage.userId
                    });
        
                // then redirect the user home so they can see the new banjo.
                this.props.history.push('/');
            }

    render() {
        return (
            <div className='changePageDiv'>  
 
                 <form onSubmit={this.handleSubmit}>
                     <label>
                                        
                     <input placeholder='Enter Ruling Planet' onChange={e => this.setState({ rulingPlanet: e.target.value})} type="string" />
                     </label> 
                     <label>
                                     
                     <input placeholder='Enter Mode Fixed True or False' onChange={e => this.setState({ mmodeFixed: e.target.value})} type="boolean" />
                     </label> 
                     <label>
                                        
                     <input placeholder='Select Chill Level Number ' onChange={e => this.setState({ chillLevel: e.target.value})} type="number" />
                     </label> 


                    <label>
                     
                     <select  onChange={this.handleChange}>
                     <option value=""> Enter Sign Name </option> 
                        {/* { 
                            
                          this.state.signs.map(signs =>
                         
                        <option key={signs.sign} value={signs.name}>
                                {signs.sign}
                          </option>)
                          } */}
                     </select>
                    </label>

                    <button>Submit</button>
               </form> 



            </div>
        )
    }
}
