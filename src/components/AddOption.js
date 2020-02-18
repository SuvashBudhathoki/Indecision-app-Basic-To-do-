import React from "react";

export default class AddOption extends React.Component {
  //since error comes from this component only, we use state here
  state = {
    error: undefined
  };

  //since preventdefault and other aspects works in this component only, we do it here.
  handleAddOption = e => {
    e.preventDefault();

    //trim() removes space from front and last part of word
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = " ";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button"> Add Option</button>
        </form>
      </div>
    );
  }
}
