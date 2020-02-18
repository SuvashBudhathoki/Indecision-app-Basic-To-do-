class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h2> Visibility Toggle</h2>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Show Details" : "Hide Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p> Some Details Here</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
// const render = () => {
//   const template = (
//     <div>
//       <h2>visibility Toggle</h2>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p> Some details shown</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();
