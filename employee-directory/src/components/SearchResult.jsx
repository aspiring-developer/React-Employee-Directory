import React, {Component} from 'react';
import SearchInput from './SearchInput';
// import EmployeeTable from './EmployeeTable';
import Api from '../Api';
class SearchResult extends Component {
state = {
  search: "",
  // result: [],
  resultDisplay: []
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
      <th scope="col">Full Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email ID</th>
      <th scope="col">Position ID</th>
    </tr>
  </thead>
  
  {this.state.resultDisplay.map(employee => {
    return ( <>
    <tbody>
    <tr key={employee.id.value}>
      <td><img src={employee.picture.thumbnail} alt="Employee Profile Thumbnail" /> </td>
      <td>{employee.name.first} {employee.name.last}</td>
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