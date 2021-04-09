import React from 'react';

class EmployeeDetailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '', 
        middleName: '',
        lastName: '', 
        preferredName: '',
        phoneNumber: '',
        email: '',
        role: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      let inputFieldName = event.target.name;
      let inputfieldValue = event.target.value;
      this.setState({[inputFieldName]: inputfieldValue});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      fetch('http://localhost:8080/employees/', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
            Middle Name:
            <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>
            Preferred Name:
            <input type="text" name="preferredName" value={this.state.preferredName} onChange={this.handleChange} />
          </label>
          <label>
            Phone #:
            <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Role:
            <input type="text" name="role" value={this.state.role} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }

  }

export default EmployeeDetailForm;