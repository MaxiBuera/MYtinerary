import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getAllTheCities } from "../../store/actions/cityActions";
import { Link } from "react-router-dom";
import './Cities.css'
 
class Cities extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            items:[],
            filterItems:[],
            isLoaded: true
        }
    }

    
    componentDidMount() {
        //console.log('componentDidMount', this.props.cities);
        this.props.getAllCities()
        //console.log('componentDidMount', this.props.cities);
        

        // fetch("http://localhost:5000/cities")
        //     .then(res => res.json())
        //     .then(items => {
 
        //         console.log(items);
        //         this.setState({
        //             items,
        //             isLoaded: true,
        //             filterItems: items,
        //         })
        //         console.log(this.state.items)
        // })
    }

    componentWillReceiveProps(newProps){

        console.log(newProps,"componente");
        this.setState({items : newProps.Cities,filterItems : newProps.cities})

    }
 
    filterCities(e){
        var value = e.toLowerCase();
        var filterCities = [...this.props.cities];

        filterCities = filterCities.filter(city => {

            let c = city._city.toLowerCase();
            return c.startsWith(value);
        })

        this.setState({
            filterItems: filterCities
        })
    }

    render() {
        const items = this.state.items;
        const isLoaded = this.state.isLoaded;
        const filterItems = this.state.filterItems;
        console.log("cities",this.props.cities)
        /*console.log(this.state.items)
        console.log(this.state.isLoaded)
        console.log(this.state.filterItems)*/

        
        if (!isLoaded) {
            return <div><br/><br/><br/><br/>Loading cities...</div>
        }
        else{
            return (
                <div className="App">
                    {/*JSON.stringify()*/}
                    <b>Search: </b>&nbsp;&nbsp;<input onChange={(e) => this.filterCities(e.target.value)}/>
                    <div>
                        {filterItems.map(item => (
                            <h2 key={item._id}>
                                <Link to="/ItinerariesPage">
                                    <p className="citiesText">{item._city}</p>
                                    <img className="img" src={item._img} alt="img_country"/>
                                </Link>                                                               
                            </h2>
                        ))}
                    </div>
                </div>
            );
        } 
    }
}

const mapStateToProps = (state) => {
    //console.log(state,"lista")
    return {
      cities: state.citiesReducer.citiesArray
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCities: () => dispatch(getAllTheCities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
