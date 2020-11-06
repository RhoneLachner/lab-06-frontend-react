
import request from 'superagent';

const URL = `https://sheltered-reaches-14727.herokuapp.com/astrology`;



//FETCHES SINGLE ASTROLOGY OBJECT
export async function fetchAstrologyItem(someId) {
    try {
        const response = await request.get(`${URL}astrology/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//FETCHES ALL SIGN NAMES
export async function fetchSigns() {
    try {
        const response = await request.get(`${URL}signs`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//CREATE ASTROLOGY ITEM
export async function createAstrology(newAstrology) {
    try {
        await request
        .post(`${URL}astrology`)
        .send(newAstrology);
        
        return;
    } catch(err) {
        throw err;
    }
}
