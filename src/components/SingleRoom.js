import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RoomContext } from "../context";

import defaultBcg from "../images/room-1jpeg";
import Hero from "./Hero";
import Banner from "./Banner";

class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  // componentDidMount = () =>  {

  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
        </div>
      );
    }

    return (
      <div className="">
        Single Room
        {}
      </div>
    );
  }
}

export default SingleRoom;
