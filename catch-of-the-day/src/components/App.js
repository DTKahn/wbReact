import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }

  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // Make a copy of state
    const fishes = { ...this.state.fishes };
    
    // Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    
    // Set new fishes object to state
    this.setState({ fishes: fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = key => {
    // Copy state
    const order = { ...this.state.order };

    // Add to the order or update the number in the order
    order[key] = order[key] + 1 || 1;

    // Update state
    this.setState({ order });

  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder} 
              /> 
            ))}
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;