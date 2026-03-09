import { Component } from "react";
import EmployeeDetails from "./EmployeeDetails";

// Define a class that extends from react's Component class
class OrganisationDetails extends Component {
  constructor(props) {
    super(props);
    // Define a state variable
    this.state = { organisationName: "My Test Organisation" };
  }
  render() {
    return (
      <div>
        {/* Pass the state variable to the child component */}
        <EmployeeDetails organisationName={this.state.organisationName} />
      </div>
    );
  }
}

export default OrganisationDetails;
