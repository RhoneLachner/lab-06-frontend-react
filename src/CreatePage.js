import React, { Component } from 'react'
import { fetchSigns, createAstrology, fetchAstrologyList} from './Fetches';
import request from 'superagent';

const userFromLocalStorage = {
    userId: 1
};


export default class CreatePage extends Component {

state = {
    signName: {},
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
                        sign_id: this.state.signName,
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
                         <div className='list-div'>
                          <select  onChange={e => this.setState({ signName: e.target.value})}>

                                  <option value=""> Select Sign Name </option> 
                                  <option value='1'>Taurus</option>
                                  <option value='2'>Aquarius</option>
                                  <option value='3'>Leo</option>
                                  <option value='4'>Scorpio</option>
                                  {console.log(this.state.signName)}
                          </select>
                          </div>
                        <div className="boolean-create-div">
                          <select  onChange={e => this.setState({ modeFixed: e.target.value})}>

                                <option value=""> Select Fixed Mode True or False </option> 
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                                {console.log(this.handleChange)} 
                        </select>
                        </div>

                    </label>         
                        
                    <label>                    
                            <input placeholder='Enter Ruling Planet' onChange={e => this.setState({ rulingPlanet: e.target.value})} type="string" />
                    </label> 
                        
                        <label>                                        
                            <input placeholder='Select Chill Level Number ' onChange={e => this.setState({ chillLevel: e.target.value})} type="number" />
                        </label> 
                    
                   

                    <button>Submit</button>
               </form> 



            </div>
        )
    }
}
