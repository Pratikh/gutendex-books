import { Component } from "react";
import _ from "lodash";
import backIcon from '../assets/icons/Back.svg';

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    _.bindAll(this, "onValueInpute");
  }

  onValueInpute(event) {
    const {
      target: { value },
    } = event;
    this.props.onChange(value);
    event.preventDefault();
  }

  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.navigateBack}
          style={{ backgroundImage: backIcon }}
        >
          Back
        </button>
        <form className="form-inline my-2 my-lg-0 d-inline-block align-top">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.onValueInpute}
          />
        </form>
      </nav>
    );
  }
}
