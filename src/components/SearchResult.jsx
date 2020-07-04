import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Api from '../Api';
class SearchResult extends Component {
  state = {
    search: "",
    result: [],
    resultDisplay: [],
    sortOrder: "ASC"
  };
  //Handling state
  handleInputChange = event => {
    const userInput = event.target.value;
    const populatedList = this.state.result.filter(employee => {
      const employeeFullName = employee.name.first + employee.name.last;
      return employeeFullName.includes(userInput);
    });
    this.setState({
      resultDisplay: populatedList,
      search: userInput
    });
  };

  //sorting employees with their first name
  sortByFirstName = () => {
    const sortEmployeeName = new Array(...this.state.result)

    const sortEmployee = sortEmployeeName.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
  if (this.state.sortOrder === "DESC") {
      sortEmployee.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ resultDisplay: sortEmployee })
  };

  // When this component mounts, search the API for employee info 
  componentDidMount() {
    Api.result().then(res => {
      this.setState({
        result: res.data.results,
        resultDisplay: res.data.results
      });
    });

  }

  render() {
    return (
      <>
        <SearchInput handler={this.handleInputChange} val={this.state.search} />
        <div className="container">
          <table className="table displayTable w-100">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={this.sortByFirstName} className="firstNameTh" title="CLICK TO SORT BY FIRST NAME!">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Role ID</th>
              </tr>
            </thead>
{/* // Map method is extracting employees list to have in new array */}
            {this.state.resultDisplay.map(employee => {
              return (<>
                <tbody>
                  <tr key={employee.id.value}>
                    <td><img src={employee.picture.thumbnail} alt="Employee Profile Thumbnail" /> </td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.age}</td>
                  </tr>
                </tbody>
                
              </>
              )

            })}
          </table>
        </div>
      </>
    )
  }
}
export default SearchResult;