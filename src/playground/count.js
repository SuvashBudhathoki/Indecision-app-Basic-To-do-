class Count extends React.Component {
  constructor(props) {
    super(props);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }
  plusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  minusOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}> -1 </button>
        <button onClick={this.reset}>Reset </button>
        <p> Count is {this.state.count}</p>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("app"));
