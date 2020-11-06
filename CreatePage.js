import React, { Component } from 'react'
import { fetchSigns, createAstrology} from './Fetches';

// const userFromLocalStorage = {
//     userId: 1
// };


// export default class CreatePage extends Component {

// state = {
//     signs: []
// }

             
//              componentDidMount = async () => {
//                 const allSigns = await fetchSigns();
                
//                 this.setState({ allSigns });
//             }

//             handleSubmit = async (e) => {
//                 e.preventDefault();


//      //BUILDS NEW ASTROLOGY ITEM USING FORM DATA FROM THE USER AND THEIR LOCAL STORAGE
//                 await createAstrology({
//                         sign_id: this.state.signId,
//                         ruling_planet: this.state.rulingPlanet,
//                         mode_fixed: this.state.modeFixed,
//                         chill_level: this.state.chillLevel,
//                         owner_id: userFromLocalStorage.userId
//                     });
        
//                 // then redirect the user home so they can see the new banjo.
//                 this.props.history.push('/');
//             }




    // render() {
    //     return (
    //         <div>  
    //             Create an astrology sign
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     ruling planet
    //                     {/* we also track the state of the noise level that the user entered  */}
    //                     <input onChange={e => this.setState({ rulingPlanet: e.target.value})} type="string" />
    //                 </label>

    //                 <label>
    //                     Sign Name 
    //                     <select onChange={this.handleChange}>
    //                         {
    //                         // we use this array of brands to make a dropdown so the user doesn't have to enter an id manually
    //                          this.state.allSigns.map(sign => <option key={sign.id} value={sign.id}>
    //                              {sign.name}
    //                          </option>)
    //                         }
    //                     </select>
    //                 </label>
    //                 <button>Submit</button>
    //             </form>

    //         </div>
    //     )
    // }
//}
