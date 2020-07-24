import React, { Component } from "react";

export default class ConstructPoster extends Component {
  render() {
    const list = this.props.list;
    console.log(list);
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={list.img}
          className="card-img-top"
          alt={list.name + " photo"}
        />
        <div className="card-body">
          <h5 className="card-title">Name : {list.name}</h5>
          <p className="card-text">
            Nickname : {list.nickname}
            <br />
            Status : {list.status}
          </p>
        </div>
      </div>
    );
  }
}
