import { FETCH_ALL_CITIES } from '../constants';

const fetchAllCities = (cities) => {
    return {
        type: FETCH_ALL_CITIES,
        cities: cities
    }
};


export const getAllTheCities = () => (dispatch) => {
    
    fetch("http://localhost:5000/cities", { method: 'GET' })
        .then(response => response.json())
        .then(response => 
            dispatch(fetchAllCities(response))
        )
        .catch(err => console.log(err));
}

//middleWare(algo q se ejecuta entre una cosa y otra)
//thunk(recibe un objeto(lo manda al reducer) o una funcion(la ejecuta y manda un action))
//...()