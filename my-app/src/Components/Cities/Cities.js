import React, { Component } from 'react';
import './Cities.css'
 
class Cities extends Component {
 /*
    constructor(props) {
        super(props);
 
        this.state = {
            items:[],
            filterItems:[],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/cities")
            .then(res => res.json())
            .then(items => {
 
                console.log(items);
                this.setState({
                    items,
                    isLoaded: true,
                    filterItems: items,
                })
                console.log(this.state.items)
        })
    }
 
    filterCities(e){

        var value = e.toLowerCase();
        var filterCities = this.state.items;


        filterCities = filterCities.filter(city => {

            let c = city._city.toLowerCase();
            return c.startsWith(value);
        })

        this.setState({
            filterItems: filterCities
        })
    }
*/
    render() {/*
        const items = this.state.items;
        const isLoaded = this.state.isLoaded;
        const filterItems = this.state.filterItems;
        /*console.log(this.state.items)
        console.log(this.state.isLoaded)
        console.log(this.state.filterItems)*/
        /*
        if (!isLoaded) {
            return <div>Loading cities...</div>
        }
        else{
           */ return (
                <div className="App">
                    <b>Search: </b><input onChange={(e) => this.filterCities(e.target.value)}/>
                    <div>
                        {filterItems.map(item => (
                            <h2 key={item._id}>
                                <a href="#">
                                    <p className="citiesText">{item._city}</p>
                                    <img className="img" src={item._img} alt="img_country"/>
                                </a>                                                               
                            </h2>
                        ))}
                    </div>
                </div>
            );
        } 
    }
//}
 
export default Cities;