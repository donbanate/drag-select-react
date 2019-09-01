import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Selection from "react-ds";

export default class Example extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      ref: null,
      elRefs: [],
      selectedElements: [] // track the elements that are selected
    };
  }

  handleSelection = indexes => {
    this.setState({
      selectedElements: indexes
    });
  };

  getStyle = index => {
    if (this.state.selectedElements.indexOf(index) > -1) {
      // Selected state
      return {
        background: "#2185d0",
        borderColor: "#2185d0",
        color: "white"
      };
    }
    return {};
  };

  addElementRef = ref => {
    const elRefs = this.state.elRefs;
    elRefs.push(ref);
    this.setState({
      elRefs
    });
  };

  renderSelection = () => {
    // Changed to arrow func
    if (!this.state.ref || !this.state.elRefs) {
      return null;
    }
    return (
      <Selection
        target={this.state.ref}
        elements={this.state.elRefs}
        onSelectionChange={this.handleSelection}
        style={this.props.style}
      />
    );
  };

  render() {
    const selectableElements = [
      "one",
      "another",
      "hey there",
      "item",
      "two",
      "three",
      "something longer?",
      "last"
    ];
    return (
      <Fragment>
        <div
          ref={ref => {
            this.setState({ ref });
          }}
          className="item-container"
        >
          {selectableElements.map((el, index) => (
            <div
              key={el}
              ref={this.addElementRef}
              style={this.getStyle(index)}
              className="item"
            >
              {el}
            </div>
          ))}
          {this.renderSelection()}
        </div>
        <Link to="/">Back</Link>
      </Fragment>
    );
  }
}

Example.propTypes = {
  style: PropTypes.object
};
