import React, { Component } from "react";

export default class EditEventForm extends Component {
  state = {
    name: this.props.selectedEvent.name,
    time: this.props.selectedEvent.nice_timestamp.slice(11),
    date:
      this.props.selectedEvent.nice_timestamp.slice(6, 10) +
      "-" +
      this.props.selectedEvent.nice_timestamp.slice(0, 5),
    location: this.props.selectedEvent.location,
    cost: "",
    description: this.props.selectedEvent.description,
    event_img: this.props.selectedEvent.event_img,
    user_id: this.props.selectedEvent.user_id,
    public: "true",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let time = "";
    if (this.state.time !== "" && this.state.date !== "") {
      time = new Date(this.state.date + " " + this.state.time).toISOString();
    }

    let newEvent = {
      name: this.state.name,
      time: time,
      location: this.state.location,
      cost: this.state.cost,
      description: this.state.description,
      event_img: this.state.event_img,
      user_id: this.props.id,
      public: this.state.public,
    };

    this.props.createEvent(newEvent);
  };

  render() {
    console.log(this.props.selectedEvent);
    return (
      <div className="event-form">
        <form className="add-event" onSubmit={this.handleSubmit}>
          <h3>Edit Event</h3>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="date"
            name="date" //this is the rails variable
            min="2021-01-01"
            max="2022-12-31"
            value={this.state.date}
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="time"
            name="time"
            value={this.state.time}
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            value={this.state.location}
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="number"
            min="0"
            name="cost"
            value={this.state.cost}
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="event_img"
            value={this.state.event_img}
            className="input-text"
          />
          <br />
          {/* <label>
            Public:&nbsp;
            <input
              type="radio"
              name="public"
              value="true"
              checked={this.state.public === "true"}
              onChange={this.handleChange}
              className="form-check-input"
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name="public"
              value="false"
              checked={this.state.public === "false"}
              onChange={this.handleChange}
              className="form-check-input"
            />
            False
          </label>
          <br /> */}
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="button"
          />
        </form>
      </div>
    );
  }
}
