import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';


/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const produce = [
  {name: "paper", type: "RECYCLE", type2: "LIGHTWEIGHT", years: 0.083, img: "PAPER.jpg" },
  {name: "plywood", type: "RECYCLE", type2: "HEAVYWEIGHT", years:2, img: "PLYWOOD.jpg"},
  {name: "Cotton Glove", type: "RECYCLE", type2: "LIGHTWEIGHT", years:0.25, img:"COTTON_GLOVES.jpeg"},
  {name: "Milk Cartons", type: "RECYCLE", type2: "LIGHTWEIGHT", years:5, img:"MILK_CARTONS.png"},
  {name: "Ceramics", type: "RECYCLE", type2: "HEAVYWEIGHT", years:1, img:"CERAMICS.jpg"},
  //no shredded paper nonapkins,tissues or paper towels
  {name: "Metal cans", type: "RECYCLE", type2: "HEAVYWEIGHT", years:150, img:"METALCANS.jpg"},
  {name: "lids", type: "RECYCLE", type2: "HEAVYWEIGHT", years:50, img:"LIDS.jpg"},
  {name: "foil", type: "RECYCLE", type2: "HEAVYWEIGHT", years:0, img:"FOIL.png"},//not decompose at all
  {name: "glass bottles", type: "RECYCLE", type2: "HEAVYWEIGHT", years:0, img:"GLASS_BOTTLES.jpg"},//not decompose at all
  {name: "Cardboard", type: "RECYCLE",type2: "LIGHTWEIGHT", years:0.1677, img:"CARDBOARDS.jpg"},
  {name: "Lumber", type: "RECYCLE", type2: "HEAVYWEIGHT", years:10, img:"LUMBER.jpg"},
  {name: "plastic containers", type: "RECYCLE", type2: "HEAVYWEIGHT", years:1000, img:"PLASTIC_CONTAINERS.jpg"},

  {name: "foam containers", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years:50, img:"FOAMCONTAINERS.jpg"},
  {name: "Batteries", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years:100, img:"BATTERIES.jpeg"},
  {name: "Strawberry", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years:0.5, img:"STRAWBERRYS.jpg"},
  {name: "Tissue paper", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years:0.2, img:"TISSUE_PAPER.jpg"},
  {name: "Lettuce", type: "NONRECYCLE", type2: "HEAVYWEIGHT", years:3, img:"LETTUCE.jpg"},
  {name: "Paper towels", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years:5, img:"PAPERTOWELS.jpg"},
  {name: "Trash bags", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years:800, img:"TRASH_BAGS.jpg"},
  {name: "Sanitary Pads", type: "NONRECYCLE", type2: "HEAVYWEIGHT", years:600, img:"SANITARY_PADS.jpg"},
  {name: "Cigarette Butts", type: "NONRECYCLE", type2: "LIGHTWEIGHT", years: 12, img:"CIGARETTE_BUTTS.jpg"},
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* 
                  The list of produce will be passed into the FilteredList
                  component the items property.
                */}
                <FilteredList items={produce} />
            </div>
        );
    }
}



export default App;
