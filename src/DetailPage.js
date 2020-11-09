import React, { Component } from 'react'
import {
    fetchAstrologyList,
    fetchAstrologyItem,
    updateAstrologyItem,
    deleteAstrologyItem,
} from './Fetches.js';

const userFromLocalStorage = {
    userId: 1
};

export default class DetailPage extends Component {

    state = {
       
        allSigns: [],
        astrologyItem: {},
        signName: '',
        signId: 1,
        rulingPlanet: '',
        modeFixed: true,
        chillLevel: 0,
        userId: 0
        
        // signId: 1,
    }


    componentDidMount = async () => {
        const allSigns = await fetchAstrologyList();
        const signItem = await fetchAstrologyItem(this.props.match.params.id);
        const signNameAsString = signItem.sign;

        const matchingBrand = allSigns.find((signItem) => {
            return signItem.sign === signNameAsString
        })

        this.setState({
            signId: signItem.sign_id,
            signName: matchingBrand.id,
            rulingPlanet: signItem.ruling_planet,
            modeFixed: signItem.mode_fixed,
            chillLevel: signItem.chill_level

        });

    }
 

//BUILDS NEW ASTROLOGY ITEM USING FORM DATA FROM THE USER AND THEIR LOCAL STORAGE
        // await updateAstrologyItem(
        //     this.props.match.params.id,
        
        // {
        //         sign_id: this.state.signName,
        //         ruling_planet: this.state.rulingPlanet,
        //         mode_fixed: this.state.modeFixed,
        //         chill_level: this.state.chillLevel,
        //         owner_id: userFromLocalStorage.userId
        //     });

        // then redirect the user home so they can see the new banjo.
        // this.props.history.push('/');
   




    handleSubmit = async (e) => {
    e.preventDefault();


    await updateAstrologyItem(
        this.props.match.params.id,
        {
                        sign_id: this.state.signName,
                        ruling_planet: this.state.rulingPlanet,
                        mode_fixed: this.state.modeFixed,
                        chill_level: this.state.chillLevel,
                        owner_id: userFromLocalStorage.userId
        }
    );
    this.props.history.push('/listpage');
    
        }
        

    handleChange = (e) => {
        this.setState({ brandId: e.target.value });
    }
    handleChangeBoolean = (e) => {
        this.setState({ modeFixed: e.target.value });
    }
    handleClickDelete = async (e) => {
        await deleteAstrologyItem(this.props.match.params.id);
    
        this.props.history.push('/listpage');
    }

    render() {

        console.log(this.props.match.params.id)


        return (
            <div className='detailsPageDiv'>
                <h3>Update an astrology sign!</h3>
            
                <form onSubmit={this.handleSubmit}>
                     <label>
                        <select onChange={this.handleChangeBoolean}
                        >
                            <option value=""> Select Fixed Mode True or False </option> 
                            <option selected={!this.state.modeFixed} value={true}>True</option>
                            <option selected={!this.state.modeFixed} value={false}>False</option>
                        </select>

                        </label>
                        <label>
                            <select onChange={this.handleChange}>
                                {
                                    this.state.allSigns.map(signs => <option
                                    selected={this.state.signId === signs.id}
                                    key={signs.sign}
                                    value={signs.sign}
                                    >
                                        {signs.sign}
                                    </option>)
                                }
                            </select>
                        </label>
                        <label>                    
                            <input placeholder='Enter Ruling Planet' 
                            onChange={e => this.setState({ rulingPlanet: e.target.value})} 
                            type="string" />
                        </label> 
                        
                        <label>                                        
                            <input placeholder='Select Chill Level Number' 
                            onChange={e => this.setState({ chillLevel: e.target.value})} 
                            type="number" />
                        </label> 

                        <button
                        className='update-button'>
                            Submit Update
                        </button>
                    </form>


                    <div className='delete-div'>
                        <button
                        className='delete-button'
                        onClick={this.handleClickDelete}>
                            Delete Item
                        </button>
                    </div>

             

            </div>
        )
    }
}
