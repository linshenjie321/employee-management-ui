import React from 'react';
import Button from 'react-bootstrap/Button';
import EmployeeSearchResults from './EmployeSearchResult'

class EmployeeSearchContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: []
        };

        this.handleRefreshEmployeeList = this.handleRefreshEmployeeList.bind(this);
    }

    handleRefreshEmployeeList() {
        fetch('http://localhost:8080/employees/')
            .then(response => response.json())
            .then(data => this.setState({results: data}));
    }

    render(){
        return(
            <div>
                <Button onClick = {this.handleRefreshEmployeeList}>Referesh Employee List</Button>
                <EmployeeSearchResults results={this.state.results} />
            </div>
        )
    }
}

export default EmployeeSearchContainer;