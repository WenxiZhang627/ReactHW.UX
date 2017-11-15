import React, {Component} from 'react';
import {Button, Col, DropdownButton, FormControl, FormGroup, InputGroup, MenuItem, Row} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: "All",
            type2: "All",
            years: false
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
        this.setState({years: false});
    }

    onType = (event) => {
        this.setState({type: event});
        this.setState({years: false});
    }

    onType2 = (event) => {
        this.setState({type2: event});
        this.setState({years: false});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type
        if (this.state.type === "All" && this.state.type2 === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1;
        }

        if (this.state.type === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1
                && item.type2 === this.state.type2;
        }

        if (this.state.type2 === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1 &&
                item.type === this.state.type;
        }

        return item.name.toLowerCase().search(this.state.search) !== -1
            && item.type === this.state.type
            && item.type2 === this.state.type2;




    }
    /* TODO: Add an event handling method for when an item in dropdown is selected
       Per the DropdownButton documentation, this function should take in an eventKey and    
       event
    */

    processList = () => {

        var items = this.props.items.filter(this.filterItem);
        if (this.state.years === true) {
            items.sort(function (a, b) {
                return a.years - b.years;
            });
        }

        return items;
    }

    onButtonClick = () => {
        this.setState({years: !this.state.years});
    }


    render() {
        return (
            <div className="filter-list">
                {/*<h1>Produce Search</h1>*/}
                {/* TODO: Add more menu items with onSelect handlers*/}
                <Row className="show-grid op-header">
                    <Col md={2} xs={2} className={"clear-between"}>
                        <DropdownButton id="typeDropdown" title={"R"} onSelect={this.onType}>
                            <MenuItem eventKey="All">All</MenuItem>
                            <MenuItem eventKey="RECYCLE">RECYCLE</MenuItem>
                            <MenuItem eventKey="NONRECYCLE">NONRECYCLE</MenuItem>
                        </DropdownButton>
                    </Col>

                    <Col md={2} xs={2} className={"clear-between"}>
                        <DropdownButton id="typeDropdown" title={"W"} onSelect={this.onType2}>
                            <MenuItem eventKey="All">All</MenuItem>
                            <MenuItem eventKey="LIGHTWEIGHT">LIGHTWEIGHT</MenuItem>
                            <MenuItem eventKey="HEAVYWEIGHT">HEAVYWEIGHT</MenuItem>
                        </DropdownButton></Col>

                    <Col md={8} xs={8} className={"clear-between"} id={"search"}>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" placeholder="Search by name/spelling"
                                             onChange={this.onSearch}/>
                                <InputGroup.Addon onClick={this.onButtonClick}>🔍</InputGroup.Addon>
                                {/*<input type="text" placeholder="Search" onChange={this.onSearch}/>*/}
                                {/*<Button title={"ss"} onClick={this.onButtonClick}>Sort</Button>*/}
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="show-grid op-buttons">
                    <Button className={"button-fix"} onClick={this.onButtonClick}>decomposer</Button>
                    <Button className={"button-fix"} >damage to soil</Button>
                </Row>
                <List items={this.processList()}/>
            </div>
        );
    }
}

export default FilteredList;