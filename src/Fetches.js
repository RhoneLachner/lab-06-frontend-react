
import request from 'superagent';


const URL = `https://sheltered-reaches-14727.herokuapp.com/astrology`;



//FETCHES SINGLE ASTROLOGY OBJECT
export async function fetchAstrologyList() {
    try {
        const response = await request.get(`${URL}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchAstrologyItem(someId) {
    try {
        const response = await request.get(`${URL}/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//FETCHES ALL SIGN NAMES
export async function fetchSignName() {
    try {
        const response = await request.get(`${URL}/signs`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//CREATE ASTROLOGY ITEM
export async function createAstrology(newAstrology) {
    try {
        await request
        .post(`${URL}`)
        .send(newAstrology);
        
        return;
    } catch(err) {
        throw err;
    }
}


export async function updateAstrologyItem(someId, newAstrology) {
    try {
        await request
        .put(`${URL}/${someId}`)
        .send(newAstrology);
        
        return;
    } catch(err) {
        throw err;
    }
}
export async function deleteAstrologyItem(someId) {
    try {
        await request.delete(`${URL}/${someId}`);
        
        return;
    } catch(err) {
        throw err;
    }
}
