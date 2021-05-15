import React from "react";
import "./App.css";

class App extends React.PureComponent {
  counter = 0;

  press = (name, age, bool) => {
    this.counter++;
    // console.log(this.counter, "Нажали кнопку");
    console.log(name, bool ? age : "");
  };

  render() {
    const { name } = this.props;
    return (
      <div className="App">
        <p>Hello {name}</p>
        <button onClick={(e) => this.press("Artem", 30, true)}>Нажми</button>
      </div>
    );
  }
}

export default App;
