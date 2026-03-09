import { Component } from "react";

// Define a class that extends from react's Component class
class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    // Define the state variables
    this.state = {
      employeeName: "Joe Doe",
      employeeEmail: "jdoe@test.com",
    };
  }

  // Handle input value change
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    // Destructure state and props
    const { employeeName, employeeEmail } = this.state;
    const { organisationName } = this.props;
    return (
      <div>
        <h1>Organisation: {organisationName}</h1>
        <p>
          <b>Employee Name: </b>
          {employeeName}
        </p>
        <p>
          <b>Employee Email: </b>
          {employeeEmail}
        </p>

        <hr />

        <h2>Change Employee Details</h2>
        <input
          type="text"
          name="employeeName"
          id="employeeName"
          value={employeeName}
          onChange={this.handleInputChange}
          placeholder="Enter Employee Name"
        />

        <input
          type="text"
          name="employeeEmail"
          id="employeeEmail"
          value={employeeEmail}
          onChange={this.handleInputChange}
          placeholder="Enter Employee Email"
        />

        {/* Clicking the button just creates an alert */}
        <button
          onClick={() => {
            alert(
              `Employee Name: ${employeeName}\nEmployee Email: ${employeeEmail}`,
            );
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default EmployeeDetails;
