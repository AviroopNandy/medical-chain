import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      contact: null,
      email: null,
      password: null,
      patient: this.props.patient,
      account: this.props.account,
      loading: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addPatients();
  };

  addPatients() {
    console.log("final", this.state);
    this.setState({ loading: true });
    this.state.patient.methods
      .addPatient(
        this.state.account,
        this.state.name,
        this.state.contact,
        this.state.email
      )
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        this.setState({ loading: false });
        window.location.assign("/");
      });
  }

  render() {
    return (
      <div className="container">
        <h4 style={{ fontSize: "40px" }}>
          Please share a few details to get you started...
        </h4>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label htmlFor="name" style={{ fontSize: "20px" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Please enter your name"
            name="name"
            className="inputBox"
            value={this.state.name}
            onChange={(e)=>this.handleInputChange(e)}
            required
          />
          <br></br>
          <label htmlFor="contact" style={{ fontSize: "20px" }}>
            Contact
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Please enter your contact number"
            className="inputBox"
            value={this.state.contact}
            onChange={(e)=>this.handleInputChange(e)}
            required
          />
          <br></br>
          <label htmlFor="email" style={{ fontSize: "20px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your contact number"
            className="inputBox"
            name="email"
            value={this.state.email}
            onChange={(e)=>this.handleInputChange(e)}
            required
          />
          <br></br>
          <label htmlFor="password" style={{ fontSize: "20px" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Please enter your password"
            name="password"
            className="inputBox"
            value={this.state.password}
            onChange={(e)=>this.handleInputChange(e)}
            required
          />
          <br></br>
          <br></br>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button className="btn green darken-2" type="submit" name="action">
              Create Account
              <i className="material-icons right">person_add</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
