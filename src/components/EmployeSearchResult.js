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
                    <th>Action</th>
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
                        <td>
                            <a href="#" onClick={props.handleUpdate} empid={r.id}>update</a><br/>
                            <a href="#" onClick={props.handleDelete} empid={r.id}>delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>);
}
export default EmployeeSearchResults;