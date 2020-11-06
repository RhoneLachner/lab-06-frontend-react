import React, { Component } from 'react'
import { fetchSigns, createAstrology} from './Fetches';
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
                const allSigns = await fetchSigns();
                
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
            <div>  
 
                 <form onSubmit={this.handleSubmit}>
                     <label>
                         Ruling Planet                
                     <input onChange={e => this.setState({ rulingPlanet: e.target.value})} type="string" />
                     </label> 
                     <label>
                        Mode Fixed?                
                     <input onChange={e => this.setState({ mmodeFixed: e.target.value})} type="boolean" />
                     </label> 
                     <label>
                         Chill Level                
                     <input onChange={e => this.setState({ chillLevel: e.target.value})} type="number" />
                     </label> 


                    <label>
                      Sign Name 
                     <select onChange={this.handleChange}>
                        { 
                          this.state.allSigns.map(sign => <option key={sign.id} value={sign.id}>
                                {sign.name}
                          </option>)
                          }
                     </select>
                    </label>

                    <button>Submit</button>
               </form> 



            </div>
        )
    }
}
