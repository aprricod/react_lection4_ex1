import React from "react";
import "./App.css";

class App extends React.PureComponent {
  counter = 0;

  constructor(props) {
    super(props);
    this.state = { hw: "Hello world!", hw2: "Hello world 2" };
  }

  press = (name, age, bool) => {
    // this.counter++;
    const hw = this.state.hw + "!";
    // this.setState({ ...this.state, hw });
    this.setState({ hw });

    // console.log(this.counter, "Нажали кнопку");
    console.log(name, bool ? age : "");
  };

  render() {
    const { name, age, bool } = this.props;
    return (
      <div className="App">
        {/* <p>Hello {name}</p> */}
        <p>{this.state.hw}</p>
        <p>{this.state.hw2}</p>
        <button onClick={(e) => this.press("Artem", 30, true)}>Нажми</button>

        <button onClick={(e) => this.press(name, age, bool)}>Нажми tot</button>
      </div>
    );
  }
}

export default App;
