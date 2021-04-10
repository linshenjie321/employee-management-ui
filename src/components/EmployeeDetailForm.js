import React from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    
    componentDidMount() {
      console.log('component mounted...');
    }

    componentWillUnmount() {
      console.log('component unmounted...');
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

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="middleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="" name="middleName" value={this.state.middleName}  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="" name="lastName" value={this.state.lastName}  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="preferredName">
            <Form.Label>Preferred Name</Form.Label>
            <Form.Control type="text" placeholder="" name="preferredName" value={this.state.preferredName}  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="" name="phoneNumber" value={this.state.phoneNumber}  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" name="email" value={this.state.email}  onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" name="role" value={this.state.role} onChange={this.handleChange}>
              <option value="">---Please Select---</option>
              <option value="JAVA_SPRING_DEVELOPER">Java Spring Developer</option>
              <option value="PEGA_DEVELOPER">Pega Developer</option>
              <option value="BUSINESS_ANALYST">Business Analyst</option>
              <option value="AUTOMATION_QA">Automation QA</option>
              <option value="MANUAL_QA">Manual QA</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
  /*
        <form onSubmit={this.handleSubmit}>
            
          
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
        </form>*/
      );
    }

  }

export default EmployeeDetailForm;