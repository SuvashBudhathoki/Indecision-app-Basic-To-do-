import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    //selected option when What should i do runs
    selectedOption: undefined
  };

  //to communicate with Action - delete button
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  //clear selectedOption

  handleDeleteSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  //remove individual item
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  // when a button clicked, show one details of options.
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  //add option to options in parent from AddOption component

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  componentDidMount = () => {
    try {
      // try to see if invalid json characters are sent and crash our program
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothhing at all
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // check if any state have been changed
    // update only when array length changed
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOption={this.handleDeleteSelectedOption}
        />
      </div>
    );
  }
}
