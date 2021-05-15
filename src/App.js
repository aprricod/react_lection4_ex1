import React from "react";
import "./App.css";

class App extends React.PureComponent {
  counter = 0;
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press() {
    this.counter++;
    console.log(this.counter, "!!!");
  }
  render = () => {
    const { name } = this.props;
    return (
      <div className="App">
        <p>Hello world {name}</p>
        <button onClick={this.press}>Кнопка</button>
      </div>
    );
  };
}

export default App;
