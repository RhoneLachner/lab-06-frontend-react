
import request from 'superagent';

const URL = `https://sheltered-reaches-14727.herokuapp.com/astrology`;

export async function fetchAstrology() {

try {
    const response = await request.get(`${URL}astrology`);
    
    return response.body;
}catch(err) {
    throw err;
    }

}
export async function fetchSigns() {
    try {
        const response = await request.get(`${URL}signs`);

        return response.body;
    } catch(err) {
        throw err;
    }
}
