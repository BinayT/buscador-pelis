import React, { Component } from "react";
import ConstructPoster from "./ConstructPoster";

export default class PresentPeople extends Component {
  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <div>
        {data.map((el) => {
          return (
            <div key={el.char_id}>
              <ConstructPoster list={el} />
            </div>
          );
        })}
      </div>
    );
  }
}
