import React, { Component } from 'react';
import Travel from "./components/Travel"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Travel 
      destination="Paris"
      country="France"
      photo="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      distance="0 KM"
      />
      <Travel 
      destination="New York"
      country="USA"
      photo="https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      distance="9000 KM"
      />
      </div>
    );
  }
}

export default App;
