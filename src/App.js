import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }

    handleChange(e) {
        this.setState({searchField: e.target.value})
    }
    // handleChange = (e) => {
    //     this.setState({searchField: e.target.value})
    // }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>

                {/* <input type="search" placeholder="search monster" onChange={(e) => {
                    this.setState({searchField: e.target.value}, () => console.log(this.state))
                }} /> */}
                {/* <input type="search" placeholder="search monster" onChange={(e) => this.setState({searchField: e.target.value})} /> */}
                <SearchBox 
                    placeholder="search monster"
                    handleChange={this.handleChange.bind(this)}
                    //handleChange={this.handleChange.bind(this)}
                />
                
                <CardList monsters={filteredMonsters} />
                
            </div>
        );
    }
}
export default App;
