import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import EmployeeSearchResults from './EmployeSearchResult'

class EmployeeSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        };

        this.handleRefreshEmployeeList = this.handleRefreshEmployeeList.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpdate() {
        alert('handleUpdate clicked');
    }

    handleDelete(event) {
        var employeeId = $(event.target).attr('empid');
        console.log('deleting employee with id = ' + employeeId);
        var url = 'http://localhost:8080/employees/'+employeeId;
        fetch(url, {
            method: 'DELETE'
        });
        this.handleRefreshEmployeeList();
    }

    handleRefreshEmployeeList() {
        console.log('handleRefreshEmployeeList called...')
        fetch('http://localhost:8080/employees/')
            .then(response => response.json())
            .then(data => this.setState({results: data}));
    }

    handleAddNewEmployee() {
        alert('add new employee button clicked');
    }

    render(){
        return(
            <Container>
                <Row noGutters = 'true'>
                    <Col sm={9}>
                        <Button onClick = {this.handleRefreshEmployeeList}>Referesh Employee List</Button>
                    </Col>
                    <Col xs={{span: 3, order: 'last'}}>
                        <Button onClick = {this.handleAddNewEmployee}>Add New Employee</Button>
                    </Col>
                </Row>
                <Row>
                    <EmployeeSearchResults results={this.state.results} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
                </Row>
            </Container>
        )
    }
}

export default EmployeeSearchContainer;