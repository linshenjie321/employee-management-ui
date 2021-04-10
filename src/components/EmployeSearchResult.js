import React from 'react';
import Table from 'react-bootstrap/Table';

function EmployeeSearchResults(props) {

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Preferred Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((r, i) => 
                        <tr>
                            <td>{r.firstName + ' ' + r.lastName}</td>
                            <td>{r.preferredName}</td>
                            <td>{r.phoneNumber}</td>
                            <td>{r.email}</td>
                            <td>{r.role}</td>
                        </tr>
                    )}
                </tbody>
            </Table>);
}
export default EmployeeSearchResults;