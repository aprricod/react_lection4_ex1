import React from "react";
import "./App.css";

class App extends React.PureComponent {
  // counter = 0;

  constructor(props) {
    super(props);
    this.state = { hw: "Hello world!", hw2: "Hello world 2", counter: 0 };
  }

  press = (name, age, bool) => {
    // this.counter++;
    // const hw = this.state.hw + "!";
    // this.setState({ ...this.state, hw });
    // this.setState({ hw });
    // console.log(this.counter, "Нажали кнопку");

    this.setState((prevState, props) => ({
      hw: prevState.hw + "!",
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { name, age, bool } = this.props;
    return (
      <div className="App">
        {/* <p>Hello {name}</p> */}
        <h1>{this.state.hw}</h1>
        {/* <p>{this.state.hw2}</p> */}
        <p>{this.state.counter}</p>
        {/* <button onClick={(e) => this.press("Artem", 30, true)}>Нажми</button> */}
        <button onClick={() => this.press(name, age, bool)}>Counter</button>
        {/* <button onClick={(e) => this.press(name, age, bool)}>Нажми tot</button> */}
      </div>
    );
  }
}

export default App;
