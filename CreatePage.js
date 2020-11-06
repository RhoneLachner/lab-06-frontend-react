import React, { Component } from 'react'
import { fetchSigns, createAstrology} from './Fetches';

const userFromLocalStorage = {
    userId: 1
};


export default class CreatePage extends Component {

state = {
    signs: []
}

             
             componentDidMount = async () => {
                const allSigns = await fetchSigns();
                
                this.setState({ allSigns });
            }

            handleSubmit = async (e) => {
                e.preventDefault();


     //BUILDS NEW ASTROLOGY ITEM USING FORM DATA FROM THE USER AND THEIR LOCAL STORAGE
                await createAstrology({
                        sign_id: this.state.signId,
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
                
   

            </div>
        )
    }
}
